import { useEffect, useState } from 'react'

const APP_STORE_URL = 'https://apps.apple.com/ca/app/classmo/id6759287637'
const FALLBACK_URL = 'https://classmo.ca/'

export default function Download() {
  const [showAndroidPopup, setShowAndroidPopup] = useState(false)

  useEffect(() => {
    const ua = navigator.userAgent

    if (/iPhone|iPad|iPod/i.test(ua)) {
      window.location.href = APP_STORE_URL
    } else if (/Android/i.test(ua)) {
      setShowAndroidPopup(true)
    } else {
      window.location.href = FALLBACK_URL
    }
  }, [])

  if (showAndroidPopup) {
    return (
      <div style={styles.overlay}>
        <div style={styles.popup}>
          <div style={styles.iconWrapper}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0A7CFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h2 style={styles.title}>Bientôt disponible !</h2>
          <p style={styles.message}>
            L'application Android est en cours de développement, elle sera prête très bientôt !
          </p>
          <a href={FALLBACK_URL} style={styles.button}>
            Retour au site
          </a>
        </div>
      </div>
    )
  }

  return (
    <div style={styles.loading}>
      <p>Redirection en cours…</p>
    </div>
  )
}

const styles = {
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #0A7CFF 0%, #0866D6 100%)',
    padding: '20px',
  },
  popup: {
    background: '#fff',
    borderRadius: '20px',
    padding: '2.5rem 2rem',
    maxWidth: '380px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
  },
  iconWrapper: {
    marginBottom: '1.25rem',
  },
  title: {
    fontSize: '1.375rem',
    fontWeight: 600,
    color: '#000',
    marginBottom: '0.75rem',
    letterSpacing: '-0.5px',
  },
  message: {
    fontSize: '1rem',
    color: '#8c8c8c',
    lineHeight: 1.6,
    marginBottom: '1.75rem',
    fontWeight: 300,
  },
  button: {
    display: 'inline-block',
    background: '#0A7CFF',
    color: '#fff',
    padding: '0.75rem 2rem',
    borderRadius: '12px',
    fontSize: '0.95rem',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'background 0.2s',
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}
