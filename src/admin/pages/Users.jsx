import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  LogOut, RefreshCw, AlertCircle, Users as UsersIcon,
  Trash2, BadgeCheck, BookOpen, Calendar, ChevronLeft, ChevronRight
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import '../styles/admin-dashboard.css'
import '../styles/admin-reports.css'
import '../styles/admin-users.css'

const API_URL = import.meta.env.VITE_API_URL
const ADMIN_ROLE = import.meta.env.VITE_ADMIN_ROLE
const PAGE_SIZE = 20

function getNumber(value) {
  const number = Number(value)
  return Number.isFinite(number) ? number : null
}

function getPaginationMeta(json, requestedPage, userCount) {
  const meta = json.pagination || json.page || json.meta || json
  const totalElements =
    getNumber(meta.totalElements) ??
    getNumber(meta.totalUsers) ??
    getNumber(meta.totalItems) ??
    getNumber(meta.total)
  const totalPages =
    getNumber(meta.totalPages) ??
    (totalElements === null ? null : Math.ceil(totalElements / PAGE_SIZE))
  const hasNext =
    typeof meta.hasNext === 'boolean' ? meta.hasNext :
    typeof meta.last === 'boolean' ? !meta.last :
    totalPages === null ? userCount === PAGE_SIZE : requestedPage < totalPages - 1

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
    <div className="admin-dashboard">
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
          <button
            onClick={() => fetchUsers(page)}
            className="admin-dashboard__refresh"
            disabled={loading}
          >
            <RefreshCw size={15} className={loading ? 'spin' : ''} />
            <span>Actualiser</span>
          </button>
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
    </div>
  )
}
