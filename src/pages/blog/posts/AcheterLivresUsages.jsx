import { Link } from 'react-router-dom'

export default function AcheterLivresUsages() {
  return (
    <>
      <p>
        Acheter des manuels scolaires usagés est la meilleure façon d'économiser au cégep.
        Mais où trouver les bonnes offres? Voici un tour d'horizon des principales options
        disponibles pour les étudiants québécois, avec les avantages et inconvénients de chacune.
      </p>

      <h2>1. Les groupes Facebook</h2>
      <p>
        Presque chaque cégep et chaque programme a son groupe Facebook de vente de manuels.
        C'est souvent le premier endroit où les étudiants pensent à chercher.
      </p>
      <h3>Avantages</h3>
      <ul>
        <li>Grande communauté d'étudiants du même cégep</li>
        <li>Possibilité de voir le profil du vendeur</li>
        <li>Gratuit</li>
      </ul>
      <h3>Inconvénients</h3>
      <ul>
        <li>Recherche difficile — les publications se perdent dans le fil d'actualité</li>
        <li>Pas de système de filtrage par matière ou prix</li>
        <li>Annonces souvent non mises à jour (manuels déjà vendus)</li>
        <li>Nécessite un compte Facebook</li>
      </ul>

      <h2>2. Kijiji et Facebook Marketplace</h2>
      <p>
        Ces plateformes généralistes contiennent aussi des annonces de manuels scolaires,
        mais elles ne sont pas conçues pour les étudiants.
      </p>
      <h3>Avantages</h3>
      <ul>
        <li>Grand volume d'annonces</li>
        <li>Recherche par mot-clé et localisation</li>
      </ul>
      <h3>Inconvénients</h3>
      <ul>
        <li>Pas de filtrage par matière ou code de cours</li>
        <li>Vendeurs pas nécessairement étudiants (prix parfois plus élevés)</li>
        <li>Beaucoup de bruit — annonces non pertinentes dans les résultats</li>
        <li>Risque plus élevé d'arnaques sur les plateformes généralistes</li>
      </ul>

      <h2>3. La coop ou librairie du cégep</h2>
      <p>
        La coop de ton cégep offre parfois un service de manuels usagés en consigne.
        Les étudiants déposent leurs livres et la coop les revend pour eux.
      </p>
      <h3>Avantages</h3>
      <ul>
        <li>Pratique — tout se fait sur place au cégep</li>
        <li>Les manuels sont vérifiés et correspondent aux cours offerts</li>
      </ul>
      <h3>Inconvénients</h3>
      <ul>
        <li>Stock limité — les manuels populaires partent vite</li>
        <li>Prix parfois moins avantageux qu'entre particuliers</li>
        <li>Disponible seulement à certaines périodes de l'année</li>
      </ul>

      <h2>4. Classmo</h2>
      <p>
        <Link to="/">Classmo</Link> est une application mobile gratuite conçue spécifiquement
        pour les étudiants de cégep qui veulent acheter et vendre des manuels scolaires.
      </p>
      <h3>Avantages</h3>
      <ul>
        <li>Filtrage par matière et code de cours du cégep</li>
        <li>Messagerie intégrée pour communiquer avec le vendeur</li>
        <li>Annonces avec photos et description de l'état du livre</li>
        <li>100% gratuit, aucune commission</li>
        <li>Badge vérifié pour les étudiants avec courriel collégial</li>
      </ul>
      <h3>Inconvénients</h3>
      <ul>
        <li>Disponible uniquement sur iOS pour le moment</li>
        <li>Communauté en croissance — le nombre d'annonces augmente avec le temps</li>
      </ul>

      <h2>Conseils pour acheter usagé</h2>
      <p>
        Peu importe la plateforme que tu choisis, garde ces conseils en tête :
      </p>
      <ul>
        <li>Vérifie toujours le numéro d'édition demandé par ton professeur</li>
        <li>Demande des photos détaillées avant de te déplacer</li>
        <li>
          Rencontre le vendeur dans un lieu public (la cafétéria du cégep est idéale)
        </li>
        <li>
          Inspecte le livre avant de payer — vérifie la{' '}
          <Link to="/blog/verifier-etat-manuel-scolaire-usage">condition du manuel</Link>
        </li>
        <li>Compare les prix sur au moins deux plateformes avant d'acheter</li>
      </ul>

      <h2>En résumé</h2>
      <p>
        Chaque option a ses forces. L'important est de ne pas se limiter à une seule source
        et de commencer à chercher tôt, idéalement quelques semaines avant le début de la session.
        Plus tu cherches tôt, plus tu as de chances de trouver de bonnes offres.
      </p>
    </>
  )
}
