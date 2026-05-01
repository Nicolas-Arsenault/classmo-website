import ScrollReveal from './ScrollReveal'
import '../styles/cta.css'

export default function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <ScrollReveal>
          <h2>Télécharge Classmo !</h2>
          <p>
            Télécharge l'application sur ton téléphone et commence à acheter et vendre tes manuels dès aujourd'hui.
          </p>
          <div className="cta-badges">
            <a href="https://apps.apple.com/ca/app/classmo/id6759287637" target="_blank" rel="noopener noreferrer" className="cta-badge-link">
              <img
                src="/appstore.svg"
                alt="Télécharger sur l'App Store"
                className="cta-badge-img"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.classmo.android" target="_blank" rel="noopener noreferrer" className="cta-badge-link">
              <img
                src="/google-play.svg"
                alt="Télécharger sur Google Play"
                className="cta-badge-img"
              />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
