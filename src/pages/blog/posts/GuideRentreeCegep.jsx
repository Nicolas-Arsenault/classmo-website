import { Link } from 'react-router-dom'

export default function GuideRentreeCegep() {
  return (
    <>
      <p>
        La rentrée au cégep, que ce soit ta première ou ta quatrième session, vient toujours
        avec son lot de préparatifs. Voici un guide pratique pour t'aider à bien t'organiser
        et commencer ta session du bon pied.
      </p>

      <h2>Avant la rentrée</h2>

      <h3>Consulte ton horaire et ton plan de cours</h3>
      <p>
        Dès que ton horaire est disponible sur Omnivox (ou le portail de ton cégep),
        consulte-le attentivement. Repère les cours qui nécessitent du matériel spécifique
        et note les manuels obligatoires listés dans les plans de cours.
      </p>
      <p>
        Certains plans de cours sont disponibles en ligne avant le début de la session.
        Sinon, attends la première journée de cours — les professeurs distribuent toujours
        le plan de cours lors du premier cours.
      </p>

      <h3>Prépare ton budget</h3>
      <p>
        Voici les principales dépenses à prévoir pour une session au cégep :
      </p>
      <ul>
        <li><strong>Manuels scolaires :</strong> entre 150$ et 500$ selon le programme (moins si tu achètes usagé)</li>
        <li><strong>Matériel scolaire :</strong> cahiers, cartables, stylos — environ 30$ à 50$</li>
        <li><strong>Transport :</strong> passe d'autobus étudiante (varie selon la ville)</li>
        <li><strong>Repas :</strong> si tu manges à la cafétéria, prévois un budget hebdomadaire</li>
      </ul>
      <p>
        Pour réduire la facture des manuels, consulte notre article sur{' '}
        <Link to="/blog/economiser-manuels-scolaires-cegep">comment économiser sur tes manuels scolaires</Link>.
      </p>

      <h3>Procure-toi tes manuels</h3>
      <p>
        Ne te précipite pas pour acheter tous tes manuels le premier jour. Voici une approche
        plus stratégique :
      </p>
      <ul>
        <li>Attends le premier cours pour confirmer quels manuels sont vraiment utilisés</li>
        <li>Vérifie le numéro d'édition requis auprès du professeur</li>
        <li>Compare les prix entre la coop, les plateformes en ligne et <Link to="/">Classmo</Link></li>
        <li>Achète usagé quand c'est possible — la différence de prix peut être importante</li>
      </ul>

      <h2>La première semaine</h2>

      <h3>Repère-toi sur le campus</h3>
      <p>
        Si c'est ta première session, prends le temps de te familiariser avec le campus
        avant le premier jour de cours. Repère tes salles de cours, la bibliothèque,
        la cafétéria et les espaces d'étude. La plupart des cégeps offrent une journée
        d'accueil ou une visite guidée — profites-en.
      </p>

      <h3>Organise ton temps</h3>
      <p>
        Au cégep, tu as plus de temps libre qu'au secondaire, mais aussi plus de travail
        à faire de façon autonome. Quelques conseils :
      </p>
      <ul>
        <li>Note les dates de remise et d'examens dès que tu reçois les plans de cours</li>
        <li>Utilise un agenda (papier ou numérique) pour planifier tes semaines</li>
        <li>Prévois du temps d'étude entre tes cours — les « trous » dans l'horaire sont parfaits pour ça</li>
        <li>Ne sous-estime pas le temps nécessaire pour les lectures et les travaux</li>
      </ul>

      <h3>Explore les ressources disponibles</h3>
      <p>
        Ton cégep offre probablement plus de ressources que tu ne le penses :
      </p>
      <ul>
        <li><strong>Bibliothèque :</strong> manuels en réserve, postes informatiques, espaces d'étude calmes</li>
        <li><strong>Centre d'aide :</strong> tutorat en français, mathématiques, anglais et autres matières</li>
        <li><strong>Services psychosociaux :</strong> aide confidentielle si tu traverses une période difficile</li>
        <li><strong>Association étudiante :</strong> activités sociales, événements et vie de campus</li>
      </ul>

      <h2>Conseils pour toute la session</h2>

      <h3>Reste organisé</h3>
      <p>
        La charge de travail au cégep augmente graduellement. Ce qui semble gérable en début
        de session peut devenir accablant si tu accumules du retard. Fais tes lectures et
        tes travaux progressivement plutôt que tout à la dernière minute.
      </p>

      <h3>N'hésite pas à demander de l'aide</h3>
      <p>
        Si tu ne comprends pas une matière, parles-en à ton professeur pendant ses heures
        de disponibilité. C'est exactement pour ça qu'elles existent. Tu peux aussi
        utiliser les services de tutorat de ton cégep.
      </p>

      <h2>En résumé</h2>
      <p>
        Une bonne rentrée, c'est avant tout une question d'organisation. Prends le temps
        de te préparer, ne te précipite pas pour acheter tout ton matériel le premier jour,
        et n'oublie pas de profiter de la vie étudiante au passage.
      </p>
    </>
  )
}
