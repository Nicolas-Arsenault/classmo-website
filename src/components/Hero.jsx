import { motion } from 'framer-motion'

import '../styles/hero.css'

function AppStoreBadge() {
  return (
    <svg viewBox="0 0 120 40" className="store-badge" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="40" rx="6" fill="#000" />
      <g fill="#fff">
        <path d="M24.77 20.3a4.95 4.95 0 0 1 2.36-4.15 5.07 5.07 0 0 0-3.99-2.16c-1.68-.18-3.31 1.01-4.17 1.01-.87 0-2.19-.99-3.61-.96a5.32 5.32 0 0 0-4.48 2.73c-1.93 3.34-.49 8.27 1.36 10.97.93 1.33 2.02 2.81 3.44 2.76 1.39-.06 1.91-.89 3.59-.89 1.67 0 2.15.89 3.6.86 1.49-.03 2.44-1.33 3.33-2.67a11.02 11.02 0 0 0 1.53-3.1 4.78 4.78 0 0 1-2.96-4.4zM22.04 12.21a4.87 4.87 0 0 0 1.12-3.49 4.96 4.96 0 0 0-3.21 1.66 4.64 4.64 0 0 0-1.14 3.37 4.11 4.11 0 0 0 3.23-1.54z" />
      </g>
      <text fill="#fff" fontFamily="-apple-system, SF Pro Text, Helvetica, sans-serif" fontSize="7" fontWeight="400">
        <tspan x="36" y="16">Télécharger dans l'</tspan>
      </text>
      <text fill="#fff" fontFamily="-apple-system, SF Pro Text, Helvetica, sans-serif" fontSize="13" fontWeight="500" letterSpacing="-0.3">
        <tspan x="36" y="30">App Store</tspan>
      </text>
    </svg>
  )
}

function PlayStoreBadge() {
  return (
    <svg viewBox="0 0 135 40" className="store-badge" xmlns="http://www.w3.org/2000/svg">
      <rect width="135" height="40" rx="6" fill="#000" />
      <g transform="translate(8.5, 7.5)">
        <path d="M1.14 0.556C0.904 0.81 0.768 1.204 0.768 1.716v21.568c0 0.512 0.136 0.906 0.372 1.16l0.06 0.058 12.088-12.088v-0.286L1.2 0.498l-0.06 0.058z" fill="#4285F4" />
        <path d="M17.316 16.442l-4.028-4.028v-0.286l4.028-4.028 0.09 0.052 4.772 2.712c1.364 0.774 1.364 2.042 0 2.818l-4.772 2.712-0.09 0.048z" fill="#FBBC04" />
        <path d="M17.408 16.39L13.288 12.27 1.14 24.444c0.45 0.476 1.192 0.536 2.032 0.06l14.236-8.114" fill="#EA4335" />
        <path d="M17.408 8.152L3.172 0.04C2.332-0.438 1.59-0.376 1.14 0.1l12.148 12.17 4.12-4.118z" fill="#34A853" />
      </g>
      <text fill="#fff" fontFamily="-apple-system, SF Pro Text, Helvetica, sans-serif" fontSize="7" fontWeight="400">
        <tspan x="36" y="16">Bientôt disponible sur</tspan>
      </text>
      <text fill="#fff" fontFamily="-apple-system, SF Pro Text, Helvetica, sans-serif" fontSize="13" fontWeight="500" letterSpacing="-0.3">
        <tspan x="36" y="30">Google Play</tspan>
      </text>
    </svg>
  )
}

const stats = [
  { value: '0$', label: 'de frais' },
  { value: '70%', label: "d'économies" },
  { value: '1 min', label: 'pour publier' },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <motion.img
            src="/classmo-icon.png"
            alt="Classmo"
            className="hero-icon"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Tes manuels scolaires,
            <br />
            <span className="hero-accent">à prix étudiant</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Achète et vends tes livres de cégep en quelques clics.
            Économise jusqu'à 70%.
          </motion.p>

          <motion.div
            className="hero-badges"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="https://apps.apple.com/app/classmo"
              target="_blank"
              rel="noopener noreferrer"
              className="badge-link"
            >
              <AppStoreBadge />
            </a>
            <div className="badge-coming-soon">
              <PlayStoreBadge />
            </div>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="hero-stat">
                <span className="hero-stat-value">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
                {index < stats.length - 1 && <span className="hero-stat-divider" />}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-phone"
          initial={{ opacity: 0, x: 40, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="iphone-frame">
            <img
              src="/hero-screenshot.png"
              alt="Classmo sur iPhone"
              className="iphone-screen"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
