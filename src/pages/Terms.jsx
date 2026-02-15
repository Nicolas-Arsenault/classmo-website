import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/legal.css'

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="legal-page">
      <div className="legal-container legal-section">
        <Link to="/privacy" className="legal-nav-link">
          &larr; Politique de confidentialité
        </Link>

        <h1 className="legal-title">Conditions d'utilisation</h1>
        <p className="legal-subtitle">Dernière mise à jour : 4 février 2025</p>

        <div className="legal-highlight">
          <p>
            <strong>Classmo</strong> (« MonLivreCegep ») est une application de marché étudiant
            permettant aux étudiants du Cégep d'acheter et de vendre des manuels scolaires usagés.
            En utilisant cette application, vous acceptez les présentes conditions.
          </p>
        </div>

        <h2>1. Acceptation des conditions</h2>
        <p>
          En créant un compte ou en utilisant Classmo, vous acceptez d'être lié par ces conditions
          d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'application.
        </p>

        <h2>2. Description du service</h2>
        <p>Classmo est une plateforme qui permet aux étudiants de :</p>
        <ul>
          <li>Publier des annonces pour vendre des manuels scolaires usagés</li>
          <li>Rechercher et consulter des annonces de manuels</li>
          <li>Communiquer avec d'autres utilisateurs via la messagerie intégrée</li>
          <li>Marquer des annonces comme favorites</li>
        </ul>
        <p>
          Classmo agit uniquement comme intermédiaire et ne participe pas aux transactions entre
          utilisateurs.
        </p>

        <h2>3. Inscription et compte</h2>
        <ul>
          <li>Vous devez fournir des informations exactes lors de l'inscription</li>
          <li>Vous êtes responsable de la confidentialité de votre mot de passe</li>
          <li>Vous devez avoir au moins 13 ans pour utiliser l'application</li>
          <li>Un compte par personne est autorisé</li>
          <li>La vérification par courriel est requise pour activer votre compte</li>
        </ul>

        <h2>4. Règles de publication</h2>
        <p>En publiant une annonce, vous vous engagez à :</p>
        <ul>
          <li>Ne publier que des manuels scolaires et matériel éducatif connexe</li>
          <li>Fournir une description honnête de l'état du manuel</li>
          <li>Utiliser des photos réelles du manuel que vous vendez</li>
          <li>Fixer un prix raisonnable et de bonne foi</li>
          <li>Ne pas publier de contenu illégal, offensant ou inapproprié</li>
        </ul>

        <h2>5. Comportement des utilisateurs</h2>
        <p>Les comportements suivants sont interdits :</p>
        <ul>
          <li>Harcèlement ou intimidation d'autres utilisateurs</li>
          <li>Publication de fausses annonces ou informations trompeuses</li>
          <li>Utilisation de l'application à des fins illégales</li>
          <li>Tentative de contournement des mesures de sécurité</li>
          <li>Création de multiples comptes</li>
          <li>Spam ou sollicitation non désirée</li>
        </ul>

        <h2>6. Transactions entre utilisateurs</h2>
        <div className="legal-warning">
          <p>
            <strong>Avertissement important :</strong> Classmo facilite la mise en relation entre
            acheteurs et vendeurs, mais <strong>n'est pas responsable des transactions</strong>{' '}
            effectuées entre utilisateurs. Toute transaction (paiement, échange, livraison) se fait
            directement entre les utilisateurs, à leurs propres risques.
          </p>
        </div>
        <p>Nous vous recommandons de :</p>
        <ul>
          <li>Effectuer les échanges en personne dans un lieu public et sécuritaire</li>
          <li>Vérifier l'état du manuel avant de finaliser l'achat</li>
          <li>Ne jamais envoyer d'argent à l'avance sans avoir vu le manuel</li>
          <li>Signaler tout comportement suspect via la fonction de signalement</li>
        </ul>

        <h2>7. Limitation de responsabilité</h2>
        <p><strong>Classmo n'est pas responsable :</strong></p>
        <ul>
          <li>Des transactions entre utilisateurs, y compris les fraudes ou arnaques</li>
          <li>De la qualité, légalité ou exactitude des annonces publiées</li>
          <li>Des dommages résultant de l'utilisation de l'application</li>
          <li>Des pertes financières liées aux transactions entre utilisateurs</li>
          <li>Du comportement des autres utilisateurs</li>
        </ul>
        <p>
          L'utilisation de Classmo se fait à vos propres risques. Nous encourageons la prudence dans
          toutes vos interactions.
        </p>

        <h2>8. Propriété intellectuelle</h2>
        <p>
          L'application Classmo, son design, son code et son contenu sont protégés par les droits
          d'auteur. Vous ne pouvez pas copier, modifier ou distribuer ces éléments sans autorisation.
        </p>
        <p>
          En publiant du contenu (photos, descriptions), vous conservez vos droits mais accordez à
          Classmo une licence pour afficher ce contenu dans le cadre du service.
        </p>

        <h2>9. Suppression de compte</h2>
        <p>
          Vous pouvez supprimer votre compte à tout moment depuis les paramètres de l'application.
          Lors de la suppression :
        </p>
        <ul>
          <li>Vos annonces et photos seront supprimées</li>
          <li>
            Vos conversations seront conservées pour les autres participants (votre nom apparaîtra
            comme « Utilisateur supprimé »)
          </li>
          <li>
            Vos données personnelles seront conservées pendant 30 jours pour des raisons légales et
            de sécurité, puis définitivement supprimées
          </li>
        </ul>
        <p>
          Nous nous réservons le droit de suspendre ou supprimer un compte en cas de violation de ces
          conditions.
        </p>

        <h2>10. Modifications des conditions</h2>
        <p>
          Nous pouvons modifier ces conditions à tout moment. Les modifications importantes seront
          communiquées via l'application. En continuant à utiliser Classmo après une modification,
          vous acceptez les nouvelles conditions.
        </p>

        <h2>11. Droit applicable</h2>
        <p>
          Ces conditions sont régies par les lois en vigueur au Québec, Canada. Tout litige sera
          soumis aux tribunaux compétents du Québec.
        </p>

        <div className="legal-contact">
          <h2>12. Contact</h2>
          <p>Pour toute question concernant ces conditions :</p>
          <p>
            <strong>Courriel :</strong>{' '}
            <a href="mailto:noreplyclassmo@gmail.com">noreplyclassmo@gmail.com</a>
          </p>
          <p style={{ marginTop: '16px' }}>
            Voir aussi notre <Link to="/privacy">Politique de confidentialité</Link>
          </p>
        </div>

        <div className="legal-footer">
          <p>&copy; 2025 Classmo (MonLivreCegep). Tous droits réservés.</p>
        </div>
      </div>
    </div>
  )
}
