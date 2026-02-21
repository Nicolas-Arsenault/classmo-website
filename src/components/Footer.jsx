import { Link } from 'react-router-dom'
import '../styles/footer.css'

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/classmo-icon.png" alt="Classmo" width={28} height={28} />
                <span>Classmo</span>
              </div>
              <p className="footer-tagline">
                La marketplace étudiante pour tes manuels scolaires de cégep.
              </p>
            </div>

            <div className="footer-column">
              <h4>Navigation</h4>
              <ul>
                <li><a href="/#fonctionnalites">Fonctionnalités</a></li>
                <li><a href="/#comment-ca-marche">Comment ça marche</a></li>
                <li><a href="/#faq">FAQ</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Légal</h4>
              <ul>
                <li>
                  <Link to="/privacy">Politique de confidentialité</Link>
                </li>
                <li>
                  <Link to="/terms">Conditions d'utilisation</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025–2026 Classmo. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
