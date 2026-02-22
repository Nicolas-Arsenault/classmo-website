import { Link } from 'react-router-dom'

export default function VendreManuels() {
  return (
    <>
      <p>
        Tu as des manuels scolaires qui prennent la poussière? Les revendre est une excellente façon
        de récupérer une partie de ton investissement. Voici cinq conseils pratiques pour vendre
        tes livres de cégep rapidement et au meilleur prix.
      </p>

      <h2>1. Prends de bonnes photos</h2>
      <p>
        Les annonces avec des photos claires et bien éclairées se vendent beaucoup plus vite.
        Les acheteurs veulent voir exactement ce qu'ils achètent.
      </p>
      <ul>
        <li>Photographie la couverture avant et arrière</li>
        <li>Montre le dos du livre (la reliure)</li>
        <li>Si le livre a des défauts (pages cornées, surlignage), photographie-les aussi — l'honnêteté inspire confiance</li>
        <li>Utilise un fond neutre et un bon éclairage naturel</li>
      </ul>
      <p>
        Sur <Link to="/">Classmo</Link>, tu peux ajouter jusqu'à 3 photos par annonce.
        Utilise-les toutes pour donner une vue complète du manuel.
      </p>

      <h2>2. Fixe un prix juste</h2>
      <p>
        Un prix trop élevé fait fuir les acheteurs; un prix trop bas te fait perdre de l'argent.
        Voici comment trouver le bon équilibre :
      </p>
      <ul>
        <li>Vérifie le prix neuf du manuel (sur le site de la coop ou de l'éditeur)</li>
        <li>Un manuel en bon état se vend généralement entre 40% et 60% du prix neuf</li>
        <li>Ajuste selon l'état : un livre comme neuf vaut plus qu'un livre très surligné</li>
        <li>Regarde les prix des autres vendeurs pour le même titre</li>
      </ul>
      <p>
        Si ton manuel ne se vend pas après une semaine, envisage de baisser le prix de 5$ à 10$.
        Mieux vaut vendre à un prix légèrement plus bas que de garder un livre inutilisé.
      </p>

      <h2>3. Décris honnêtement l'état du livre</h2>
      <p>
        Une description précise évite les mauvaises surprises et les conflits avec l'acheteur.
        Mentionne clairement :
      </p>
      <ul>
        <li>L'état général (comme neuf, bon état, usure normale, etc.)</li>
        <li>La présence de surlignage ou d'annotations</li>
        <li>Tout dommage visible (pages déchirées, taches, couverture abîmée)</li>
        <li>Si un code d'accès en ligne était inclus et s'il a été utilisé</li>
      </ul>
      <p>
        Les acheteurs apprécient les vendeurs honnêtes. Une bonne réputation te permet
        de vendre plus facilement tes prochains manuels.
      </p>

      <h2>4. Réponds rapidement aux messages</h2>
      <p>
        Quand un acheteur potentiel t'écrit, réponds dans les heures qui suivent.
        Les étudiants cherchent souvent leurs manuels en urgence (surtout en début de session)
        et iront voir ailleurs si tu ne réponds pas vite.
      </p>
      <p>
        Active les notifications sur ton téléphone pour ne pas manquer de messages.
        Sur Classmo, la messagerie intégrée t'envoie des notifications push
        dès qu'un acheteur te contacte.
      </p>

      <h2>5. Publie au bon moment</h2>
      <p>
        Le timing est crucial pour vendre rapidement. Les meilleurs moments pour publier
        tes annonces de manuels :
      </p>
      <ul>
        <li>
          <strong>2 à 3 semaines avant le début de la session</strong> — les étudiants commencent
          à chercher leurs manuels dès qu'ils reçoivent leurs horaires
        </li>
        <li>
          <strong>La première semaine de cours</strong> — les retardataires achètent en urgence,
          souvent prêts à payer le prix demandé
        </li>
        <li>
          <strong>Immédiatement après la fin de ta session</strong> — profite du fait que le titre
          du cours est encore frais dans ta mémoire
        </li>
      </ul>
      <p>
        Évite de publier en milieu de session : la demande est beaucoup plus faible
        et tu risques de devoir attendre des mois avant de trouver un acheteur.
      </p>

      <h2>En résumé</h2>
      <p>
        Vendre tes manuels rapidement se résume à trois choses : une bonne présentation
        (photos + description), un prix réaliste, et une réactivité dans tes échanges.
        Plus tu facilites l'achat pour l'acheteur, plus tu vendras vite.
      </p>
    </>
  )
}
