import ScrollReveal from './ScrollReveal'
import '../styles/how-it-works.css'

const steps = [
  {
    number: '1',
    title: 'Crée ton compte',
    description: 'Inscris-toi avec ton courriel en quelques secondes.',
  },
  {
    number: '2',
    title: 'Publie ou recherche',
    description: 'Ajoute tes manuels à vendre ou parcours les annonces.',
  },
  {
    number: '3',
    title: 'Connecte et échange',
    description: 'Contacte le vendeur et organisez l\'échange sur le campus.',
  },
]

export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="how-it-works section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2>Comment ça marche</h2>
          </div>
        </ScrollReveal>

        <div className="how-it-works-steps">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.12}>
              <div className="step">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
