import { Search, Percent, Camera, MessageCircle, ShieldCheck, Heart } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import '../styles/features.css'

const features = [
  {
    icon: Search,
    title: 'Simple',
    description: 'Recherche par titre, cours ou matière. Filtre par état du livre.',
  },
  {
    icon: Percent,
    title: 'Économique',
    description: 'Profite des aubaines et achète tes livres à prix réduit.',
  },
  {
    icon: Camera,
    title: 'Rapide',
    description: 'Publie ton annonce avec photos en moins d\'une minute.',
  },
  {
    icon: MessageCircle,
    title: 'Direct',
    description: 'Contacte les vendeurs directement via le chat intégré.',
  },
  {
    icon: ShieldCheck,
    title: 'Vérifié',
    description: 'Les étudiants avec un courriel collégial obtiennent le badge vérifié.',
  },
  {
    icon: Heart,
    title: 'Gratuit',
    description: 'Aucun frais, aucune commission. Fait par et pour les étudiants.',
  },
]

export default function Features() {
  return (
    <section id="fonctionnalites" className="features section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2>Pourquoi Classmo?</h2>
          </div>
        </ScrollReveal>

        <div className="features-grid">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.06} className="feature-cell">
              <div className="feature-card">
                <div className="feature-icon">
                  <feature.icon size={40} strokeWidth={1.5} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
