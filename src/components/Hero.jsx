import { motion } from 'motion/react'

import '../styles/hero.css'

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
            className="hero-qr"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img
              src="/qr-code-download-classmo.png"
              alt="QR code Téléchargement"
              className="hero-qr-img"
            />
            <span className="hero-qr-label">L'application Classmo est disponible sur l'App Store & Google Play</span>
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
