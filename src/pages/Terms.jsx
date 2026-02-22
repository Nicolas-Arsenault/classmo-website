import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useDocumentMeta from '../hooks/useDocumentMeta'
import '../styles/legal.css'

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useDocumentMeta({
    title: 'Conditions d\'utilisation — Classmo',
    description: 'Conditions d\'utilisation de Classmo, l\'application gratuite pour acheter et vendre des manuels scolaires entre étudiants de cégep.',
    canonical: 'https://classmo.ca/terms',
  })

  return (
    <div className="legal-page">
      <div className="legal-container legal-section">
        <Link to="/privacy" className="legal-nav-link">
          &larr; Politique de confidentialité
        </Link>

        <h1 className="legal-title">Conditions d'utilisation</h1>
        <p className="legal-subtitle">Dernière mise à jour : 22 février 2026</p>

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
          <li>Un seul compte par adresse courriel est autorisé</li>
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
          <li>Création de multiples comptes (une seule adresse courriel par compte)</li>
          <li>Spam ou sollicitation non désirée</li>
        </ul>

        <h2>6. Modération du contenu et signalements</h2>
        <p>
          Classmo dispose d'un système de signalement permettant aux utilisateurs de signaler des
          annonces ou des utilisateurs qui enfreignent ces conditions d'utilisation.
        </p>
        <ul>
          <li>Tout utilisateur peut signaler une annonce ou un autre utilisateur depuis l'application</li>
          <li>Les signalements sont examinés par l'équipe d'administration de Classmo</li>
          <li>
            Les mesures prises peuvent inclure : le retrait d'annonces, la suspension temporaire
            ou la suppression définitive du compte de l'utilisateur fautif
          </li>
          <li>Les décisions de modération sont prises à la discrétion de Classmo</li>
          <li>Les signalements abusifs ou de mauvaise foi peuvent entraîner des sanctions</li>
        </ul>

        <h2>7. Transactions entre utilisateurs</h2>
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

        <h2>8. Limitation de responsabilité</h2>
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

        <h2>9. Propriété intellectuelle</h2>
        <p>
          L'application Classmo, son design, son code et son contenu sont protégés par les droits
          d'auteur. Vous ne pouvez pas copier, modifier ou distribuer ces éléments sans autorisation.
        </p>
        <p>
          En publiant du contenu (photos, descriptions), vous conservez vos droits mais accordez à
          Classmo une licence pour afficher ce contenu dans le cadre du service.
        </p>

        <h2>10. Suppression de compte</h2>
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

        <h2>11. Modifications des conditions</h2>
        <p>
          Nous pouvons modifier ces conditions à tout moment. Les modifications importantes seront
          communiquées via l'application. En continuant à utiliser Classmo après une modification,
          vous acceptez les nouvelles conditions.
        </p>

        <h2>12. Droit applicable</h2>
        <p>
          Ces conditions sont régies par les lois en vigueur au Québec, Canada. Tout litige sera
          soumis aux tribunaux compétents du Québec.
        </p>

        <h2>13. Conditions relatives à l'App Store d'Apple</h2>
        <p>
          Les présentes conditions constituent un accord entre vous et <strong>Classmo (Nicolas Arsenault)</strong>,
          et non avec Apple Inc. (« Apple »). Apple n'est pas responsable de l'application ni de son contenu.
        </p>
        <ul>
          <li>
            Apple n'a aucune obligation de fournir des services de maintenance ou de support technique
            pour l'application. Pour toute question ou demande de support, veuillez contacter Classmo
            directement à l'adresse indiquée ci-dessous.
          </li>
          <li>
            En cas de non-conformité de l'application à une garantie applicable, vous pouvez en informer
            Apple et Apple pourra vous rembourser le prix d'achat de l'application (le cas échéant).
            Dans la mesure maximale permise par la loi applicable, Apple n'a aucune autre obligation de
            garantie concernant l'application.
          </li>
          <li>
            Classmo, et non Apple, est responsable de toute réclamation relative à l'application,
            y compris les réclamations en matière de responsabilité du fait des produits, de
            non-conformité aux exigences légales ou réglementaires, et de protection des consommateurs.
          </li>
          <li>
            En cas de réclamation d'un tiers alléguant que l'application ou votre utilisation de
            l'application enfreint les droits de propriété intellectuelle de ce tiers, Classmo, et
            non Apple, sera seul responsable de l'enquête, de la défense, du règlement et de
            l'acquittement de cette réclamation.
          </li>
          <li>
            Apple et ses filiales sont des tiers bénéficiaires des présentes conditions d'utilisation.
            Dès votre acceptation de ces conditions, Apple aura le droit (et sera réputé avoir accepté
            ce droit) de faire appliquer les présentes conditions à votre encontre en tant que tiers
            bénéficiaire.
          </li>
          <li>
            En utilisant l'application, vous déclarez que vous ne résidez pas dans un pays soumis à un
            embargo du gouvernement des États-Unis ou désigné comme un pays « soutenant le terrorisme »,
            et que vous ne figurez sur aucune liste de parties interdites ou restreintes du gouvernement
            des États-Unis.
          </li>
          <li>
            Vous acceptez de respecter les conditions d'utilisation des services tiers applicables lors
            de l'utilisation de l'application, y compris le{' '}
            <a
              href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contrat de licence utilisateur final standard d'Apple (EULA)
            </a>.
          </li>
        </ul>

        <div className="legal-contact">
          <h2>14. Contact</h2>
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
          <p>&copy; 2025-2026 Classmo (MonLivreCegep). Tous droits réservés.</p>
        </div>
      </div>
    </div>
  )
}
