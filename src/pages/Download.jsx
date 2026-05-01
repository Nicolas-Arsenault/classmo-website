import { useEffect } from 'react'

const APP_STORE_URL = 'https://apps.apple.com/ca/app/classmo/id6759287637'
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.classmo.android&hl=en_CA'
const FALLBACK_URL = 'https://classmo.ca/'

export default function Download() {
  useEffect(() => {
    const ua = navigator.userAgent

    if (/iPhone|iPad|iPod/i.test(ua)) {
      window.location.href = APP_STORE_URL
    } else if (/Android/i.test(ua)) {
      window.location.href = GOOGLE_PLAY_URL
    } else {
      window.location.href = FALLBACK_URL
    }
  }, [])

  return (
    <div style={styles.loading}>
      <p>Redirection en cours…</p>
    </div>
  )
}

const styles = {
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}
