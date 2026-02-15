import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/legal.css'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="legal-page">
      <div className="legal-container legal-section">
        <h1 className="legal-title">Politique de confidentialité</h1>
        <p className="legal-subtitle">Dernière mise à jour : 4 février 2025</p>

        <Link to="/terms" className="legal-nav-link">
          Conditions d'utilisation &rarr;
        </Link>

        <div className="legal-highlight">
          <p>
            <strong>Classmo</strong> (« MonLivreCegep ») est une application de marché étudiant
            permettant aux étudiants du Cégep d'acheter et de vendre des manuels scolaires usagés.
          </p>
        </div>

        <h2>1. Responsable du traitement</h2>
        <p>Le responsable du traitement des données personnelles est :</p>
        <p>
          <strong>Nicolas Arsenault</strong>
          <br />
          Courriel : <a href="mailto:noreplyclassmo@gmail.com">noreplyclassmo@gmail.com</a>
        </p>

        <h2>2. Données collectées</h2>
        <p>Nous collectons les données suivantes lorsque vous utilisez l'application :</p>
        <ul>
          <li><strong>Informations de compte :</strong> Nom complet, adresse courriel, mot de passe (chiffré)</li>
          <li><strong>Photo de profil :</strong> Image optionnelle que vous choisissez de téléverser</li>
          <li><strong>Annonces :</strong> Titre, description, prix, photos des manuels que vous publiez</li>
          <li><strong>Messages :</strong> Contenu des conversations avec d'autres utilisateurs</li>
          <li><strong>Données techniques :</strong> Informations de connexion pour la sécurité du compte</li>
        </ul>

        <h2>3. Utilisation des données</h2>
        <p>Vos données sont utilisées pour :</p>
        <ul>
          <li>Créer et gérer votre compte utilisateur</li>
          <li>Afficher vos annonces aux autres utilisateurs</li>
          <li>Permettre la communication entre acheteurs et vendeurs</li>
          <li>Vérifier votre statut d'étudiant (si vous utilisez un courriel étudiant)</li>
          <li>Assurer la sécurité de la plateforme et prévenir les abus</li>
          <li>Améliorer nos services (statistiques agrégées et anonymes)</li>
        </ul>

        <h2>4. Partage des données</h2>
        <p>Vos données personnelles ne sont <strong>jamais vendues</strong> à des tiers.</p>
        <p>Certaines informations sont visibles par les autres utilisateurs :</p>
        <ul>
          <li>Votre nom et photo de profil (sur vos annonces)</li>
          <li>Vos annonces publiques</li>
          <li>Vos messages dans les conversations privées</li>
        </ul>
        <p>Nous pouvons partager vos données uniquement si requis par la loi.</p>

        <h2>5. Stockage et sécurité</h2>
        <ul>
          <li>Les mots de passe sont chiffrés avec BCrypt</li>
          <li>Les communications sont sécurisées par HTTPS/TLS</li>
          <li>Les données sont stockées sur des serveurs sécurisés</li>
          <li>L'accès aux données est limité et protégé</li>
        </ul>

        <h2>6. Conservation des données</h2>
        <p>Vos données sont conservées tant que votre compte est actif.</p>
        <p><strong>En cas de suppression de compte :</strong></p>
        <ul>
          <li>Vos annonces, photos et favoris sont supprimés immédiatement</li>
          <li>Vos données personnelles (nom, courriel, etc.) sont conservées pendant <strong>30 jours</strong> dans une archive sécurisée</li>
          <li>Cette période permet de traiter d'éventuels signalements ou enquêtes en cours</li>
          <li>Après 30 jours, toutes vos données sont définitivement supprimées</li>
          <li>Vos messages dans les conversations existantes sont conservés (votre nom apparaît comme « Utilisateur supprimé »)</li>
        </ul>

        <h2>7. Vos droits</h2>
        <p>Conformément aux lois applicables, vous avez le droit de :</p>
        <ul>
          <li><strong>Accéder</strong> à vos données personnelles</li>
          <li><strong>Rectifier</strong> vos informations inexactes</li>
          <li><strong>Supprimer</strong> votre compte et vos données</li>
          <li><strong>Exporter</strong> vos données dans un format portable</li>
        </ul>
        <p>Pour exercer ces droits, contactez-nous à l'adresse ci-dessous.</p>

        <h2>8. Photos et appareil photo</h2>
        <p>L'application demande l'accès à :</p>
        <ul>
          <li><strong>Appareil photo :</strong> Pour prendre des photos de vos manuels à vendre</li>
          <li><strong>Photothèque :</strong> Pour sélectionner des photos existantes de vos manuels</li>
        </ul>
        <p>Ces photos sont utilisées uniquement pour vos annonces et ne sont jamais partagées à d'autres fins.</p>

        <h2>9. Limitation de responsabilité</h2>
        <div className="legal-warning">
          <p>
            <strong>Avertissement :</strong> Classmo facilite la mise en relation entre acheteurs et
            vendeurs, mais <strong>n'est pas responsable des transactions</strong> entre utilisateurs,
            incluant les cas de fraude ou d'arnaque. Toute transaction se fait aux risques des utilisateurs.
          </p>
        </div>
        <p>Nous vous recommandons de :</p>
        <ul>
          <li>Effectuer les échanges en personne dans un lieu public</li>
          <li>Vérifier l'état du manuel avant l'achat</li>
          <li>Ne jamais envoyer d'argent à l'avance</li>
          <li>Signaler tout comportement suspect</li>
        </ul>
        <p>
          Pour plus de détails, consultez nos{' '}
          <Link to="/terms">Conditions d'utilisation</Link>.
        </p>

        <h2>10. Modifications</h2>
        <p>
          Cette politique peut être mise à jour occasionnellement. Les modifications importantes seront
          communiquées dans l'application.
        </p>

        <div className="legal-contact">
          <h2>11. Contact</h2>
          <p>Pour toute question concernant cette politique ou vos données personnelles :</p>
          <p>
            <strong>Courriel :</strong>{' '}
            <a href="mailto:noreplyclassmo@gmail.com">noreplyclassmo@gmail.com</a>
          </p>
        </div>

        <div className="legal-footer">
          <p>&copy; 2025 Classmo (MonLivreCegep). Tous droits réservés.</p>
        </div>
      </div>
    </div>
  )
}
