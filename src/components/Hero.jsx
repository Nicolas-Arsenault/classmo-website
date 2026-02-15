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
      <rect width="135" height="40" rx="6" fill="#333" />
      <g transform="translate(10, 8)">
        <path d="M4 0.5L17 12L4 23.5V0.5Z" fill="#fff" />
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
