import { useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import '../styles/navbar.css'

const links = [
  { label: 'Fonctionnalités', href: '/#fonctionnalites' },
  { label: 'Comment ça marche', href: '/#comment-ca-marche' },
  { label: 'FAQ', href: '/#faq' },
]

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-logo">
          <img src="/classmo-icon.png" alt="Classmo" width={28} height={28} />
          <span>Classmo</span>
        </a>

        <div className="navbar-links">
          {links.map(link => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar-right">
          <a
            href="https://apps.apple.com/app/classmo"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cta"
          >
            <Download size={16} />
            Télécharger
          </a>

          <button
            className="navbar-hamburger"
            onClick={() => setDrawerOpen(prev => !prev)}
            aria-label="Menu"
          >
            {drawerOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            className="navbar-drawer"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
          >
            {links.map(link => (
              <a key={link.href} href={link.href} onClick={() => setDrawerOpen(false)}>
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
