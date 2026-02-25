import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  LogOut, Users, BookOpen, MessageSquare, TrendingUp,
  RefreshCw, AlertCircle, ShieldCheck
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import '../styles/admin-dashboard.css'

function formatNum(n) {
  if (n == null) return '—'
  return n.toLocaleString('fr-CA')
}

function formatPct(n) {
  if (n == null) return '—'
  return `${(n * 100).toFixed(1)}%`
}

function formatHours(n) {
  if (n == null) return '—'
  if (n < 1) return `${Math.round(n * 60)} min`
  return `${n.toFixed(1)} h`
}

/* ──────────────────────────────────────────────
   BarChart — pure SVG vertical bars
   bars: [{ label, value, color? }]
   ────────────────────────────────────────────── */
function BarChart({ bars, height = 160 }) {
  const maxVal = Math.max(...bars.map(b => b.value), 1)
  const barWidth = 48
  const gap = 24
  const totalW = bars.length * barWidth + (bars.length - 1) * gap
  const padTop = 28
  const padBottom = 24
  const chartH = height - padTop - padBottom

  return (
    <svg
      className="bar-chart"
      viewBox={`0 0 ${totalW} ${height}`}
      width="100%"
      preserveAspectRatio="xMidYMid meet"
    >
      {bars.map((b, i) => {
        const barH = maxVal > 0 ? (b.value / maxVal) * chartH : 0
        const x = i * (barWidth + gap)
        const y = padTop + chartH - barH
        return (
          <g key={i}>
            <text
              x={x + barWidth / 2}
              y={y - 6}
              textAnchor="middle"
              className="bar-chart__value-label"
            >
              {formatNum(b.value)}
            </text>
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={Math.max(barH, 2)}
              rx={6}
              fill={b.color || 'var(--blue, #0A7CFF)'}
              className="bar-chart__bar"
            />
            <text
              x={x + barWidth / 2}
              y={height - 4}
              textAnchor="middle"
              className="bar-chart__label"
            >
              {b.label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

/* ──────────────────────────────────────────────
   DonutChart — SVG ring with stroke-dasharray
   segments: [{ label, value, color }]
   ────────────────────────────────────────────── */
function DonutChart({ segments, size = 140 }) {
  const total = segments.reduce((s, seg) => s + seg.value, 0)
  const radius = 52
  const circumference = 2 * Math.PI * radius
  const cx = size / 2
  const cy = size / 2
  const strokeWidth = 18

  let cumulative = 0

  return (
    <div className="donut-chart">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background ring */}
        <circle
          cx={cx} cy={cy} r={radius}
          fill="none"
          stroke="var(--border, #e8e8e8)"
          strokeWidth={strokeWidth}
        />
        {total > 0 && segments.map((seg, i) => {
          const pct = seg.value / total
          const dash = pct * circumference
          const offset = -(cumulative / total) * circumference
          cumulative += seg.value
          return (
            <circle
              key={i}
              cx={cx} cy={cy} r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${dash} ${circumference - dash}`}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="donut-chart__segment"
              transform={`rotate(-90 ${cx} ${cy})`}
            />
          )
        })}
        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central" className="donut-chart__total">
          {formatNum(total)}
        </text>
      </svg>
      <div className="donut-chart__legend">
        {segments.map((seg, i) => (
          <div key={i} className="donut-chart__legend-item">
            <span className="donut-chart__dot" style={{ background: seg.color }} />
            <span className="donut-chart__legend-label">{seg.label}</span>
            <span className="donut-chart__legend-value">{formatNum(seg.value)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────
   ProgressBar — CSS bar with label + percentage
   ────────────────────────────────────────────── */
function ProgressBar({ label, value, max = 1 }) {
  const isNull = value == null
  const pct = isNull ? 0 : Math.min((value / max) * 100, 100)
  const display = isNull ? '—' : `${(value * 100).toFixed(1)}%`

  return (
    <div className="progress-bar">
      <div className="progress-bar__header">
        <span className="progress-bar__label">{label}</span>
        <span className="progress-bar__pct">{display}</span>
      </div>
      <div className="progress-bar__track">
        <div
          className="progress-bar__fill"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────
   Section card wrapper
   ────────────────────────────────────────────── */
function Card({ title, icon, children, className = '' }) {
  return (
    <div className={`dash-card ${className}`}>
      <h2 className="dash-card__title">
        {icon}
        <span>{title}</span>
      </h2>
      <div className="dash-card__body">
        {children}
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────
   Dashboard
   ────────────────────────────────────────────── */
export default function Dashboard() {
  const { user, accessToken, logout } = useAuth()
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  async function fetchAnalytics() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://api.classmo.ca/api/admin/analytics', {
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
      setData(await res.json())
    } catch (err) {
      setError(err.message || 'Impossible de charger les données.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchAnalytics() }, [])

  function handleLogout() {
    logout()
    navigate('/admin/login')
  }

  const inactiveListings = data
    ? Math.max(data.totalListings - data.activeListings - data.soldListings, 0)
    : 0

  return (
    <div className="admin-dashboard">
      <header className="admin-dashboard__header">
        <div className="admin-dashboard__header-left">
          <img src="/classmo-icon.png" alt="Classmo" className="admin-dashboard__logo" />
          <h1>Dashboard de Statistiques</h1>
        </div>
        <div className="admin-dashboard__header-right">
          <span className="admin-dashboard__user">{user?.fullName}</span>
          <button onClick={handleLogout} className="admin-dashboard__logout">
            <LogOut size={16} />
            <span>Déconnexion</span>
          </button>
        </div>
      </header>

      <main className="admin-dashboard__content">
        <div className="admin-dashboard__toolbar">
          <p className="admin-dashboard__welcome">
            Bienvenue, {user?.fullName || 'Admin'}
          </p>
          <button
            onClick={fetchAnalytics}
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
            <span>Chargement des données...</span>
          </div>
        )}

        {data && (
          <>
            {/* ── Hero KPI Row ── */}
            <div className="hero-row">
              <div className="hero-card">
                <Users size={20} className="hero-card__icon" />
                <span className="hero-card__value">{formatNum(data.totalUsers)}</span>
                <span className="hero-card__label">Total utilisateurs</span>
              </div>
              <div className="hero-card">
                <BookOpen size={20} className="hero-card__icon" />
                <span className="hero-card__value">{formatNum(data.activeListings)}</span>
                <span className="hero-card__label">Annonces actives</span>
              </div>
              <div className="hero-card">
                <MessageSquare size={20} className="hero-card__icon" />
                <span className="hero-card__value">{formatNum(data.totalMessages)}</span>
                <span className="hero-card__label">Messages totaux</span>
              </div>
              <div className="hero-card">
                <ShieldCheck size={20} className="hero-card__icon" />
                <span className="hero-card__value">{formatNum(data.verifiedStudents)}</span>
                <span className="hero-card__label">Étudiants vérifiés</span>
              </div>
            </div>

            {/* ── Two-column grid ── */}
            <div className="dash-grid">
              {/* Left: Utilisateurs */}
              <div className="dash-grid__col">
                <Card title="Nouveaux utilisateurs" icon={<Users size={16} />}>
                  <BarChart bars={[
                    { label: '24h', value: data.usersLast24h },
                    { label: '7j', value: data.usersLast7Days, color: '#5bb3ff' },
                    { label: '30j', value: data.usersLast30Days, color: '#a8d5ff' },
                  ]} />
                </Card>
                <Card title="Utilisateurs actifs" icon={<TrendingUp size={16} />}>
                  <BarChart bars={[
                    { label: '24h', value: data.activeUsersLast24h },
                    { label: '7j', value: data.activeUsersLast7Days, color: '#5bb3ff' },
                    { label: '30j', value: data.activeUsersLast30Days, color: '#a8d5ff' },
                  ]} />
                </Card>
              </div>

              {/* Right: Annonces */}
              <div className="dash-grid__col">
                <Card title="Répartition annonces" icon={<BookOpen size={16} />}>
                  <DonutChart segments={[
                    { label: 'Actives', value: data.activeListings, color: 'var(--blue, #0A7CFF)' },
                    { label: 'Vendues', value: data.soldListings, color: '#34d399' },
                    { label: 'Inactives', value: inactiveListings, color: '#d1d5db' },
                  ]} />
                </Card>
                <Card title="Nouvelles annonces" icon={<BookOpen size={16} />}>
                  <BarChart bars={[
                    { label: '24h', value: data.listingsLast24h },
                    { label: '7j', value: data.listingsLast7Days, color: '#5bb3ff' },
                    { label: '30j', value: data.listingsLast30Days, color: '#a8d5ff' },
                  ]} />
                </Card>
              </div>
            </div>

            {/* ── Messagerie ── */}
            <Card title="Messagerie" icon={<MessageSquare size={16} />} className="dash-full">
              <div className="dash-msg-grid">
                <div>
                  <h3 className="dash-card__subtitle">Messages</h3>
                  <BarChart bars={[
                    { label: '24h', value: data.messagesLast24h },
                    { label: '7j', value: data.messagesLast7Days, color: '#5bb3ff' },
                    { label: '30j', value: data.messagesLast30Days, color: '#a8d5ff' },
                  ]} />
                </div>
                <div>
                  <h3 className="dash-card__subtitle">Conversations</h3>
                  <BarChart bars={[
                    { label: '24h', value: data.chatRoomsLast24h },
                    { label: '7j', value: data.chatRoomsLast7Days, color: '#5bb3ff' },
                  ]} />
                </div>
              </div>
            </Card>

            {/* ── Rétention & Engagement ── */}
            <Card title="Rétention & engagement" icon={<TrendingUp size={16} />} className="dash-full">
              <div className="dash-retention">
                <div className="dash-retention__bars">
                  <ProgressBar label="Rétention J1" value={data.retentionD1} />
                  <ProgressBar label="Rétention J7" value={data.retentionD7} />
                  <ProgressBar label="Rétention J30" value={data.retentionD30} />
                  <ProgressBar label="% avec annonce" value={data.pctUsersWithListing} />
                  <ProgressBar label="% annonce < 24h" value={data.pctUsersListedWithin24h} />
                </div>
                <div className="dash-retention__stats">
                  <div className="mini-stat">
                    <span className="mini-stat__value">{formatHours(data.avgHoursToFirstListing)}</span>
                    <span className="mini-stat__label">Délai 1re annonce</span>
                  </div>
                  <div className="mini-stat">
                    <span className="mini-stat__value">{formatHours(data.avgHoursToFirstMessage)}</span>
                    <span className="mini-stat__label">Délai 1er message</span>
                  </div>
                </div>
              </div>
            </Card>
          </>
        )}
      </main>
    </div>
  )
}
