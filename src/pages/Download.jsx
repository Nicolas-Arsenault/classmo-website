import { useEffect } from 'react'

// Placeholder URLs — update when app store listings are live
const APP_STORE_URL = 'https://apps.apple.com/app/classmo/id0000000000'
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=ca.classmo'
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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <p>Redirection en cours…</p>
    </div>
  )
}
