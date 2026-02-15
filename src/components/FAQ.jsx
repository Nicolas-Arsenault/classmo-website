import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import '../styles/faq.css'

const faqs = [
  {
    question: 'C\'est quoi Classmo?',
    answer: 'Classmo est une application mobile gratuite qui permet aux étudiants de cégep d\'acheter et de vendre leurs manuels scolaires directement entre eux, sans intermédiaire.',
  },
  {
    question: 'Est-ce que c\'est gratuit?',
    answer: 'Oui, complètement! Classmo est 100% gratuit. Aucun frais d\'inscription, aucune commission sur les ventes. L\'application est faite par et pour les étudiants.',
  },
  {
    question: 'Comment ça fonctionne pour vendre un livre?',
    answer: 'C\'est simple : crée ton compte, prends quelques photos de ton manuel, ajoute un titre, le prix et la matière, et publie ton annonce. Les acheteurs intéressés te contacteront via le chat intégré.',
  },
  {
    question: 'Est-ce que mes données sont protégées?',
    answer: 'Absolument. Tes données sont chiffrées et stockées de manière sécurisée. Les mots de passe sont hachés, les communications sont protégées par TLS, et nous ne partageons jamais tes informations personnelles.',
  },
  {
    question: 'L\'application est disponible sur Android?',
    answer: 'Pour le moment, Classmo est disponible uniquement sur iOS (iPhone). Une version Android est prévue prochainement.',
  },
  {
    question: 'Je dois être étudiant pour utiliser Classmo?',
    answer: 'N\'importe qui peut créer un compte et utiliser l\'application. Cependant, les étudiants qui s\'inscrivent avec un courriel collégial (.edu, @cegepsi.ca, etc.) obtiennent un badge vérifié sur leur profil.',
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(prev => !prev)}>
        <span>{question}</span>
        <ChevronDown size={20} className={`faq-chevron ${open ? 'open' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="faq section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2>Questions fréquentes</h2>
            <p>Tout ce que tu veux savoir sur Classmo.</p>
          </div>
        </ScrollReveal>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.06}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
