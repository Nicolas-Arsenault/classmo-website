import ScrollReveal from './ScrollReveal'
import '../styles/cta.css'

export default function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <ScrollReveal>
          <h2>Télécharge Classmo !</h2>
          <p>
            Scanne le code QR pour télécharger l'application sur ton téléphone et commence à acheter et vendre tes manuels dès aujourd'hui.
          </p>
          <div className="cta-qr">
            <img
              src="/qr-code-download-classmo.png"
              alt="QR code Téléchargement"
              className="cta-qr-img"
            />
            <span className="cta-qr-label">Scanne le code QR pour télécharger l'application</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
