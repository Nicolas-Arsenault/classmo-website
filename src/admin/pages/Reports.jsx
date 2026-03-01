import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  LogOut, RefreshCw, AlertCircle, ShieldCheck,
  Flag, User, Trash2, X
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import '../styles/admin-dashboard.css'
import '../styles/admin-reports.css'

const API_URL = import.meta.env.VITE_API_URL

function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('fr-CA', {
    year: 'numeric', month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })
}

function ReportCard({ report, onDismiss, onDelete, dismissingId }) {
  const isListing = report.reportType === 'LISTING'
  const displayName = isListing ? report.listingTitle : report.reportedUserName

  return (
    <div className="report-card">
      <div className="report-card__header">
        <span className={`report-card__badge report-card__badge--${isListing ? 'listing' : 'user'}`}>
          {isListing ? 'Annonce' : 'Utilisateur'}
        </span>
        <span className="report-card__date">{formatDate(report.createdAt)}</span>
      </div>
      <div className="report-card__body">
        <div className="report-card__title">
          {isListing ? <Flag size={14} /> : <User size={14} />}
          <span>{displayName || 'Inconnu'}</span>
        </div>
        <p className="report-card__reason">{report.reason}</p>
        <span className="report-card__reporter">
          Signalé par {report.reporterName || 'Inconnu'}
        </span>
      </div>
      <div className="report-card__actions">
        <button
          className="report-card__btn report-card__btn--dismiss"
          onClick={() => onDismiss(report.id)}
          disabled={dismissingId === report.id}
        >
          <X size={13} />
          {dismissingId === report.id ? 'Retrait...' : 'Rejeter'}
        </button>
        {isListing && report.listingId && (
          <button
            className="report-card__btn report-card__btn--delete"
            onClick={() => onDelete(report)}
          >
            <Trash2 size={13} />
            Supprimer l'annonce
          </button>
        )}
      </div>
    </div>
  )
}

function ConfirmModal({ report, onCancel, onConfirm, deleting }) {
  return (
    <div className="confirm-modal__overlay" onClick={onCancel}>
      <div className="confirm-modal" onClick={e => e.stopPropagation()}>
        <h3>Supprimer l'annonce?</h3>
        <p>
          L'annonce « {report.listingTitle} » sera définitivement supprimée,
          ainsi que tous les signalements associés. Cette action est irréversible.
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

export default function Reports() {
  const { user, accessToken, logout } = useAuth()
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [dismissingId, setDismissingId] = useState(null)
  const [confirmTarget, setConfirmTarget] = useState(null)
  const [deleting, setDeleting] = useState(false)

  async function fetchReports() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${API_URL}/api/admin/reports?page=0&size=20`, {
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
      setData(json.reports)
    } catch (err) {
      setError(err.message || 'Impossible de charger les signalements.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchReports() }, [])

  async function handleDismiss(reportId) {
    setDismissingId(reportId)
    try {
      const res = await fetch(`${API_URL}/api/admin/reports/${reportId}`, {
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
      setData(prev => prev.filter(r => r.id !== reportId))
    } catch (err) {
      setError(err.message || 'Impossible de rejeter le signalement.')
    } finally {
      setDismissingId(null)
    }
  }

  async function handleDeleteListing() {
    if (!confirmTarget) return
    setDeleting(true)
    try {
      const res = await fetch(`${API_URL}/api/admin/listings/${confirmTarget.listingId}`, {
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
      setData(prev => prev.filter(r => r.listingId !== confirmTarget.listingId))
      setConfirmTarget(null)
    } catch (err) {
      setError(err.message || "Impossible de supprimer l'annonce.")
    } finally {
      setDeleting(false)
    }
  }

  function handleLogout() {
    logout()
    navigate('/admin/login')
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-dashboard__header">
        <div className="admin-dashboard__header-left">
          <img src="/classmo-icon.png" alt="Classmo" className="admin-dashboard__logo" />
          <h1>Signalements</h1>
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
            onClick={fetchReports}
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

        {loading && !data && (
          <div className="admin-dashboard__loading">
            <RefreshCw size={20} className="spin" />
            <span>Chargement des signalements...</span>
          </div>
        )}

        {data && data.length === 0 && (
          <div className="admin-reports__empty">
            <ShieldCheck size={40} />
            <p>Aucun signalement en attente</p>
          </div>
        )}

        {data && data.length > 0 && (
          <div className="admin-reports__grid">
            {data.map(report => (
              <ReportCard
                key={report.id}
                report={report}
                onDismiss={handleDismiss}
                onDelete={setConfirmTarget}
                dismissingId={dismissingId}
              />
            ))}
          </div>
        )}
      </main>

      {confirmTarget && (
        <ConfirmModal
          report={confirmTarget}
          onCancel={() => setConfirmTarget(null)}
          onConfirm={handleDeleteListing}
          deleting={deleting}
        />
      )}
    </div>
  )
}
