import ScrollReveal from './ScrollReveal'
import '../styles/cta.css'

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

export default function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <ScrollReveal>
          <h2>Prêt à économiser?</h2>
          <p>
            Télécharge Classmo gratuitement et commence à acheter et vendre tes manuels dès aujourd'hui.
          </p>
          <a
            href="https://apps.apple.com/app/classmo"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-badge"
          >
            <AppStoreBadge />
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
