import ScrollReveal from './ScrollReveal'
import '../styles/cta.css'

export default function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <ScrollReveal>
          <h2>Rejoins la bêta!</h2>
          <p>
            Scanne le code QR pour rejoindre la bêta sur TestFlight et commence à acheter et vendre tes manuels dès aujourd'hui.
          </p>
          <div className="cta-qr">
            <img
              src="/testflight-qr.png"
              alt="QR code TestFlight"
              className="cta-qr-img"
            />
            <span className="cta-qr-label">Scanne pour rejoindre la bêta</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
