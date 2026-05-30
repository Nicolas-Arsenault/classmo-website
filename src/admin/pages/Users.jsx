import { useState, useEffect, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  LogOut, RefreshCw, AlertCircle, Users as UsersIcon,
  Trash2, BadgeCheck, BookOpen, Calendar, ChevronLeft, ChevronRight,
  Download, Shuffle, X, Eye, EyeOff
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import '../styles/admin-dashboard.css'
import '../styles/admin-reports.css'
import '../styles/admin-users.css'

const API_URL = import.meta.env.VITE_API_URL
const ADMIN_ROLE = import.meta.env.VITE_ADMIN_ROLE
const PAGE_SIZE = 20
const EXPORT_PAGE_SIZE = 100
const EXPORT_MODES = {
  names: {
    label: 'Noms',
    slug: 'noms',
    getLine: user => user.fullName || '',
  },
  emails: {
    label: 'Emails',
    slug: 'emails',
    getLine: user => user.email || '',
  },
  both: {
    label: 'Noms et emails',
    slug: 'noms-emails',
    getLine: user => `${user.fullName || ''}\t${user.email || ''}`,
  },
}
const WHEEL_COLORS = ['#0A7CFF', '#ffffff']
const WHEEL_SPIN_DURATION_MS = 5500

function getNumber(value) {
  const number = Number(value)
  return Number.isFinite(number) ? number : null
}

function getPaginationMeta(json, requestedPage, userCount, pageSize = PAGE_SIZE) {
  const meta = json.pagination || json.page || json.meta || json
  const totalElements =
    getNumber(meta.totalElements) ??
    getNumber(meta.totalUsers) ??
    getNumber(meta.totalItems) ??
    getNumber(meta.total)
  const totalPages =
    getNumber(meta.totalPages) ??
    (totalElements === null ? null : Math.ceil(totalElements / pageSize))
  const hasNext =
    typeof meta.hasNext === 'boolean' ? meta.hasNext :
    typeof meta.last === 'boolean' ? !meta.last :
    totalPages === null ? userCount === pageSize : requestedPage < totalPages - 1

  return {
    totalElements,
    totalPages,
    hasNext,
    hasPrevious: requestedPage > 0,
  }
}

function getInitials(fullName) {
  if (!fullName) return '?'
  return fullName
    .split(' ')
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase()
}

function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('fr-CA', {
    year: 'numeric', month: 'short', day: 'numeric',
  })
}

function formatRelativeTime(iso) {
  if (!iso) return ''
  const now = Date.now()
  const then = new Date(iso).getTime()
  const diffSec = Math.floor((now - then) / 1000)

  if (diffSec < 60) return 'à l\'instant'
  const diffMin = Math.floor(diffSec / 60)
  if (diffMin < 60) return `il y a ${diffMin} min`
  const diffH = Math.floor(diffMin / 60)
  if (diffH < 24) return `il y a ${diffH}h`
  const diffD = Math.floor(diffH / 24)
  if (diffD < 30) return `il y a ${diffD}j`
  const diffM = Math.floor(diffD / 30)
  return `il y a ${diffM} mois`
}

function getExportFilename(mode) {
  const date = new Date().toISOString().slice(0, 10)
  return `classmo-users-${EXPORT_MODES[mode].slug}-${date}.txt`
}

function downloadTextFile(filename, text) {
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}

function normalizeDegrees(degrees) {
  return ((degrees % 360) + 360) % 360
}

function getWheelEntries(users) {
  return users
    .map(user => ({
      user,
      label: (user.fullName || user.email || '').trim(),
    }))
    .filter(entry => entry.label)
}

function getShuffledEntries(entries) {
  const shuffled = [...entries]
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const current = shuffled[i]
    shuffled[i] = shuffled[j]
    shuffled[j] = current
  }
  return shuffled
}

function UserCard({ user, onDelete }) {
  return (
    <div className="user-card">
      <div className="user-card__avatar">
        {getInitials(user.fullName)}
      </div>
      <div className="user-card__info">
        <div className="user-card__name-row">
          <span className="user-card__name">{user.fullName || 'Inconnu'}</span>
          {user.role === ADMIN_ROLE && (
            <span className="user-card__badge--admin">Admin</span>
          )}
          {user.verifiedStudent && (
            <span className="user-card__badge--verified">
              <BadgeCheck size={14} />
            </span>
          )}
        </div>
        <div className="user-card__email">{user.email}</div>
        <div className="user-card__meta">
          <span>
            <BookOpen size={11} />
            {user.listingCount} annonce{user.listingCount !== 1 ? 's' : ''}
          </span>
          <span>
            <Calendar size={11} />
            {formatDate(user.createdAt)}
          </span>
          {user.lastActiveAt && (
            <span>
              <span className="user-card__active-dot" />
              {formatRelativeTime(user.lastActiveAt)}
            </span>
          )}
        </div>
      </div>
      {user.role !== ADMIN_ROLE && (
        <button
          className="user-card__btn--delete"
          onClick={() => onDelete(user)}
          title="Supprimer l'utilisateur"
        >
          <Trash2 size={15} />
        </button>
      )}
    </div>
  )
}

function ConfirmModal({ user, onCancel, onConfirm, deleting }) {
  return (
    <div className="confirm-modal__overlay" onClick={onCancel}>
      <div className="confirm-modal" onClick={e => e.stopPropagation()}>
        <h3>Supprimer l'utilisateur?</h3>
        <p>
          L'utilisateur « {user.fullName} » sera définitivement supprimé,
          ainsi que toutes ses annonces. Cette action est irréversible.
        </p>
        <div className="confirm-modal__actions">
          <button
            className="confirm-modal__btn confirm-modal__btn--cancel"
            onClick={onCancel}
            disabled={deleting}
          >
            Annuler
          </button>
          <button
            className="confirm-modal__btn confirm-modal__btn--confirm"
            onClick={onConfirm}
            disabled={deleting}
          >
            {deleting ? 'Suppression...' : 'Supprimer'}
          </button>
        </div>
      </div>
    </div>
  )
}

function UsersWheel({ entries, spinning, rotation, onSpin }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    let cancelled = false

    const size = 360
    const ratio = window.devicePixelRatio || 1
    canvas.width = size * ratio
    canvas.height = size * ratio

    const ctx = canvas.getContext('2d')
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    ctx.clearRect(0, 0, size, size)

    const center = size / 2
    const radius = center - 6
    const arc = (Math.PI * 2) / entries.length
    const drawCenter = (logo) => {
      ctx.beginPath()
      ctx.arc(center, center, 34, 0, Math.PI * 2)
      ctx.fillStyle = '#fff'
      ctx.fill()
      ctx.strokeStyle = '#000'
      ctx.lineWidth = 3
      ctx.stroke()

      if (logo) {
        ctx.save()
        ctx.beginPath()
        ctx.arc(center, center, 25, 0, Math.PI * 2)
        ctx.clip()
        ctx.drawImage(logo, center - 25, center - 25, 50, 50)
        ctx.restore()
      }
    }

    entries.forEach((entry, index) => {
      const start = -Math.PI / 2 - arc / 2 + index * arc
      const end = start + arc
      const color = WHEEL_COLORS[index % WHEEL_COLORS.length]

      ctx.beginPath()
      ctx.moveTo(center, center)
      ctx.arc(center, center, radius, start, end)
      ctx.closePath()
      ctx.fillStyle = color
      ctx.fill()
      ctx.strokeStyle = '#000'
      ctx.lineWidth = 2
      ctx.stroke()

      ctx.save()
      ctx.translate(center, center)
      ctx.rotate(start + arc / 2)
      ctx.textAlign = 'right'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = '#000'
      ctx.font = entries.length > 28 ? '600 10px system-ui, sans-serif' : '700 12px system-ui, sans-serif'
      const text = entry.label.length > 28 ? `${entry.label.slice(0, 25)}...` : entry.label
      ctx.fillText(text, radius - 14, 0)
      ctx.restore()
    })

    ctx.beginPath()
    ctx.arc(center, center, radius, 0, Math.PI * 2)
    ctx.strokeStyle = '#000'
    ctx.lineWidth = 3
    ctx.stroke()

    drawCenter()

    const logo = new Image()
    logo.onload = () => {
      if (!cancelled) drawCenter(logo)
    }
    logo.src = '/classmo-icon.png'

    return () => {
      cancelled = true
    }
  }, [entries])

  return (
    <div className="admin-users-wheel">
      <div className="admin-users-wheel__pointer" />
      <canvas
        ref={canvasRef}
        className="admin-users-wheel__canvas"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: spinning ? `transform ${WHEEL_SPIN_DURATION_MS}ms cubic-bezier(0.12, 0.74, 0.18, 1)` : 'none',
        }}
      />
      <button
        type="button"
        className="admin-users-wheel__spin"
        onClick={onSpin}
        disabled={spinning || entries.length === 0}
      >
        <Shuffle size={15} />
        <span>{spinning ? 'Ça tourne...' : 'Tourner'}</span>
      </button>
    </div>
  )
}

function WheelModal({
  users,
  loading,
  onCancel,
}) {
  const [rotation, setRotation] = useState(0)
  const [spinning, setSpinning] = useState(false)
  const [winner, setWinner] = useState(null)
  const [wheelEntries, setWheelEntries] = useState([])
  const [showWinnerEmail, setShowWinnerEmail] = useState(false)
  const spinTimeoutRef = useRef(null)

  useEffect(() => {
    setWheelEntries(getWheelEntries(users))
    setWinner(null)
    setShowWinnerEmail(false)
    setRotation(0)
  }, [users])

  useEffect(() => () => {
    if (spinTimeoutRef.current) clearTimeout(spinTimeoutRef.current)
  }, [])

  function spinWheel() {
    if (spinning || wheelEntries.length === 0) return

    const nextEntries = getShuffledEntries(wheelEntries)
    const winnerIndex = Math.floor(Math.random() * nextEntries.length)
    const arcDegrees = 360 / nextEntries.length
    const targetRotation = normalizeDegrees(-winnerIndex * arcDegrees)
    const currentRotation = normalizeDegrees(rotation)
    const rotationDelta = normalizeDegrees(targetRotation - currentRotation)
    const nextRotation = rotation + (360 * 7) + rotationDelta

    setWinner(null)
    setShowWinnerEmail(false)
    setWheelEntries(nextEntries)
    setSpinning(true)
    setRotation(nextRotation)

    spinTimeoutRef.current = setTimeout(() => {
      setWinner(nextEntries[winnerIndex])
      setSpinning(false)
    }, WHEEL_SPIN_DURATION_MS + 100)
  }

  return (
    <div className="admin-users-wheel-modal__overlay" onClick={onCancel}>
      <div className="admin-users-wheel-modal" onClick={e => e.stopPropagation()}>
        <div className="admin-users-wheel-modal__header">
          <div>
            <h3>Roue des utilisateurs</h3>
            <p>{wheelEntries.length} utilisateur{wheelEntries.length !== 1 ? 's' : ''} dans la roue</p>
          </div>
          <button
            type="button"
            className="admin-users-wheel-modal__close"
            onClick={onCancel}
            aria-label="Fermer la roue"
          >
            <X size={17} />
          </button>
        </div>

        {loading && (
          <div className="admin-users-wheel-modal__state">
            <RefreshCw size={18} className="spin" />
            <span>Chargement de la roue...</span>
          </div>
        )}

        {!loading && wheelEntries.length === 0 && (
          <div className="admin-users-wheel-modal__state">
            <UsersIcon size={28} />
            <span>Aucun utilisateur disponible</span>
          </div>
        )}

        {!loading && wheelEntries.length > 0 && (
          <>
            <UsersWheel
              entries={wheelEntries}
              spinning={spinning}
              rotation={rotation}
              onSpin={spinWheel}
            />
            <div className="admin-users-wheel-modal__result">
              {winner ? (
                <>
                  <span>Gagnant: </span>
                  <strong>{winner.user.fullName || 'Inconnu'}</strong>
                  {winner.user.email && (
                    <div className="admin-users-wheel-modal__email-row">
                      <small>{showWinnerEmail ? winner.user.email : '••••••••••••••••'}</small>
                      <button
                        type="button"
                        className="admin-users-wheel-modal__email-toggle"
                        onClick={() => setShowWinnerEmail(prev => !prev)}
                        aria-label={showWinnerEmail ? 'Masquer le courriel' : 'Afficher le courriel'}
                        title={showWinnerEmail ? 'Masquer le courriel' : 'Afficher le courriel'}
                      >
                        {showWinnerEmail ? <EyeOff size={14} /> : <Eye size={14} />}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <span>Tourne la roue pour choisir un utilisateur.</span>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default function Users() {
  const { user, accessToken, logout } = useAuth()
  const navigate = useNavigate()
  const [users, setUsers] = useState(null)
  const [page, setPage] = useState(0)
  const [pagination, setPagination] = useState({
    totalElements: null,
    totalPages: null,
    hasNext: false,
    hasPrevious: false,
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [confirmTarget, setConfirmTarget] = useState(null)
  const [deleting, setDeleting] = useState(false)
  const [exportMode, setExportMode] = useState('both')
  const [exporting, setExporting] = useState(false)
  const [wheelOpen, setWheelOpen] = useState(false)
  const [wheelUsers, setWheelUsers] = useState([])
  const [wheelLoading, setWheelLoading] = useState(false)

  async function fetchUsers(pageToFetch = page) {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${API_URL}/api/admin/users?page=${pageToFetch}&size=${PAGE_SIZE}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      if (!res.ok) {
        if (res.status === 401 || res.status === 403) {
          logout()
          navigate('/admin/login')
          return
        }
        throw new Error(`Erreur ${res.status}`)
      }
      const json = await res.json()
      const nextUsers = json.users || json.content || []
      setUsers(nextUsers)
      setPagination(getPaginationMeta(json, pageToFetch, nextUsers.length))
    } catch (err) {
      setError(err.message || 'Impossible de charger les utilisateurs.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchUsers(page) }, [page])

  async function fetchAllUsers() {
    const allUsers = []
    let exportPage = 0
    let hasNext = true

    while (hasNext) {
      const res = await fetch(`${API_URL}/api/admin/users?page=${exportPage}&size=${EXPORT_PAGE_SIZE}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      if (!res.ok) {
        if (res.status === 401 || res.status === 403) {
          logout()
          navigate('/admin/login')
          return null
        }
        throw new Error(`Erreur ${res.status}`)
      }

      const json = await res.json()
      const pageUsers = json.users || json.content || []
      allUsers.push(...pageUsers)

      const exportPagination = getPaginationMeta(json, exportPage, pageUsers.length, EXPORT_PAGE_SIZE)
      hasNext = exportPagination.hasNext
      exportPage += 1
    }

    return allUsers
  }

  async function handleExportUsers() {
    setExporting(true)
    setError('')
    try {
      const allUsers = await fetchAllUsers()
      if (!allUsers) return

      const mode = EXPORT_MODES[exportMode]
      const text = allUsers.map(mode.getLine).join('\n')
      downloadTextFile(getExportFilename(exportMode), text)
    } catch (err) {
      setError(err.message || "Impossible d'exporter les utilisateurs.")
    } finally {
      setExporting(false)
    }
  }

  async function handleOpenWheel() {
    setWheelOpen(true)
    setWheelLoading(true)
    setWheelUsers([])
    setError('')
    try {
      const allUsers = await fetchAllUsers()
      if (!allUsers) {
        setWheelOpen(false)
        return
      }
      setWheelUsers(allUsers)
    } catch (err) {
      setError(err.message || 'Impossible de charger la roue.')
      setWheelOpen(false)
    } finally {
      setWheelLoading(false)
    }
  }

  async function handleDeleteUser() {
    if (!confirmTarget) return
    setDeleting(true)
    try {
      const res = await fetch(`${API_URL}/api/admin/users/${confirmTarget.id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      if (!res.ok) {
        if (res.status === 401 || res.status === 403) {
          logout()
          navigate('/admin/login')
          return
        }
        throw new Error(`Erreur ${res.status}`)
      }
      const nextUsers = users.filter(u => u.id !== confirmTarget.id)
      setUsers(nextUsers)
      setPagination(prev => ({
        ...prev,
        totalElements: prev.totalElements === null ? null : Math.max(prev.totalElements - 1, 0),
      }))
      setConfirmTarget(null)
      if (nextUsers.length === 0 && page > 0) {
        setPage(page - 1)
      }
    } catch (err) {
      setError(err.message || "Impossible de supprimer l'utilisateur.")
    } finally {
      setDeleting(false)
    }
  }

  function handleLogout() {
    logout()
    navigate('/admin/login')
  }

  function goToPreviousPage() {
    if (!loading && page > 0) {
      setPage(page - 1)
    }
  }

  function goToNextPage() {
    if (!loading && pagination.hasNext) {
      setPage(page + 1)
    }
  }

  const hasUsers = users && users.length > 0
  const showPagination = users && (hasUsers || page > 0)

  return (
    <div className="admin-dashboard admin-users-page">
      <header className="admin-dashboard__header">
        <div className="admin-dashboard__header-left">
          <img src="/classmo-icon.png" alt="Classmo" className="admin-dashboard__logo" />
          <h1>Utilisateurs</h1>
        </div>
        <div className="admin-dashboard__header-right">
          <button onClick={handleLogout} className="admin-dashboard__logout">
            <LogOut size={16} />
            <span>Déconnexion</span>
          </button>
        </div>
      </header>

      <nav className="admin-nav-tabs">
        <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
          Statistiques
        </NavLink>
        <NavLink to="/admin/reports" className={({ isActive }) => isActive ? 'active' : ''}>
          Signalements
        </NavLink>
        <NavLink to="/admin/users" className={({ isActive }) => isActive ? 'active' : ''}>
          Utilisateurs
        </NavLink>
      </nav>

      <main className="admin-dashboard__content">
        <div className="admin-dashboard__toolbar">
          <p className="admin-dashboard__welcome">
            Bienvenue, {user?.fullName || 'Admin'}
          </p>
          <div className="admin-users__toolbar-actions">
            <div className="admin-users__export">
              <select
                className="admin-users__export-select"
                value={exportMode}
                onChange={e => setExportMode(e.target.value)}
                disabled={exporting}
                aria-label="Champs à exporter"
              >
                {Object.entries(EXPORT_MODES).map(([value, mode]) => (
                  <option key={value} value={value}>{mode.label}</option>
                ))}
              </select>
              <button
                type="button"
                onClick={handleExportUsers}
                className="admin-users__export-btn"
                disabled={loading || exporting}
              >
                {exporting ? (
                  <RefreshCw size={15} className="spin" />
                ) : (
                  <Download size={15} />
                )}
                <span>{exporting ? 'Export...' : 'Exporter TXT'}</span>
              </button>
            </div>
            <button
              type="button"
              onClick={handleOpenWheel}
              className="admin-users__wheel-btn"
              disabled={loading || wheelLoading}
            >
              {wheelLoading ? (
                <RefreshCw size={15} className="spin" />
              ) : (
                <Shuffle size={15} />
              )}
              <span>{wheelLoading ? 'Roue...' : 'Roue'}</span>
            </button>
            <button
              onClick={() => fetchUsers(page)}
              className="admin-dashboard__refresh"
              disabled={loading}
            >
              <RefreshCw size={15} className={loading ? 'spin' : ''} />
              <span>Actualiser</span>
            </button>
          </div>
        </div>

        {error && (
          <div className="admin-dashboard__error">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        {loading && !users && (
          <div className="admin-dashboard__loading">
            <RefreshCw size={20} className="spin" />
            <span>Chargement des utilisateurs...</span>
          </div>
        )}

        {users && users.length === 0 && (
          <div className="admin-users__empty">
            <UsersIcon size={40} />
            <p>Aucun utilisateur trouvé</p>
          </div>
        )}

        {hasUsers && (
          <>
            <div className="admin-users__grid">
              {users.map(u => (
                <UserCard
                  key={u.id}
                  user={u}
                  onDelete={setConfirmTarget}
                />
              ))}
            </div>
          </>
        )}

        {showPagination && (
          <div className="admin-users__pagination">
            <button
              type="button"
              className="admin-users__pagination-btn"
              onClick={goToPreviousPage}
              disabled={loading || !pagination.hasPrevious}
            >
              <ChevronLeft size={15} />
              <span>Précédent</span>
            </button>

            <div className="admin-users__pagination-status">
              <span>
                Page {page + 1}
                {pagination.totalPages ? ` sur ${pagination.totalPages}` : ''}
              </span>
              {pagination.totalElements !== null && (
                <small>{pagination.totalElements} utilisateurs</small>
              )}
            </div>

            <button
              type="button"
              className="admin-users__pagination-btn"
              onClick={goToNextPage}
              disabled={loading || !pagination.hasNext}
            >
              <span>Suivant</span>
              <ChevronRight size={15} />
            </button>
          </div>
        )}
      </main>

      {confirmTarget && (
        <ConfirmModal
          user={confirmTarget}
          onCancel={() => setConfirmTarget(null)}
          onConfirm={handleDeleteUser}
          deleting={deleting}
        />
      )}

      {wheelOpen && (
        <WheelModal
          users={wheelUsers}
          loading={wheelLoading}
          onCancel={() => setWheelOpen(false)}
        />
      )}
    </div>
  )
}
