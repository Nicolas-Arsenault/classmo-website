import { Link } from 'react-router-dom'

export default function EconomiserManuels() {
  return (
    <>
      <p>
        Les manuels scolaires représentent une dépense importante pour les étudiants de cégep.
        Selon plusieurs estimations, un étudiant peut dépenser entre 300$ et 700$ par session uniquement en livres.
        Heureusement, il existe plusieurs façons de réduire cette facture sans compromettre tes études.
      </p>

      <h2>1. Acheter des manuels usagés</h2>
      <p>
        C'est la méthode la plus efficace pour économiser. Un manuel usagé en bon état coûte généralement
        entre 40% et 70% moins cher que le neuf. La plupart des manuels de cégep sont utilisés pendant
        plusieurs sessions, ce qui signifie qu'il y a toujours des exemplaires disponibles sur le marché secondaire.
      </p>
      <p>
        Avant d'acheter, vérifie auprès de ton enseignant que l'édition du manuel n'a pas changé.
        Un livre d'une édition précédente peut parfois fonctionner si les changements sont mineurs,
        mais il vaut mieux confirmer.
      </p>

      <h2>2. Comparer les prix entre plusieurs sources</h2>
      <p>
        Ne te limite pas à la coop de ton cégep. Compare les prix sur différentes plateformes :
      </p>
      <ul>
        <li>La coop ou librairie de ton cégep (neuf et parfois usagé)</li>
        <li>Les groupes Facebook de ton programme ou cégep</li>
        <li>Kijiji et Marketplace (recherche par titre ou ISBN)</li>
        <li><Link to="/">Classmo</Link> — une application conçue spécifiquement pour les étudiants de cégep</li>
      </ul>
      <p>
        Prends quelques minutes pour comparer avant d'acheter. La différence de prix peut être significative.
      </p>

      <h2>3. Partager avec un collègue de classe</h2>
      <p>
        Si tu as un ami dans le même cours, vous pouvez acheter un seul exemplaire et le partager.
        C'est particulièrement pratique pour les manuels que vous consultez seulement en classe
        ou pour faire des exercices occasionnels.
      </p>
      <p>
        Cette approche fonctionne moins bien si le professeur assigne beaucoup de lectures à la maison,
        mais elle peut diviser le coût par deux pour les manuels de référence.
      </p>

      <h2>4. Attendre avant d'acheter</h2>
      <p>
        Au début de la session, attends quelques jours avant d'acheter tous tes manuels. Certains professeurs
        ne les utilisent que rarement, et tu pourras déterminer lesquels sont vraiment essentiels
        après la première ou deuxième semaine de cours.
      </p>
      <p>
        Consulte aussi le plan de cours : si un manuel est listé comme « optionnel » ou « recommandé »
        plutôt que « obligatoire », tu pourras peut-être t'en passer en utilisant les exemplaires
        disponibles à la bibliothèque du cégep.
      </p>

      <h2>5. Revendre tes manuels à la fin de la session</h2>
      <p>
        Un manuel qui dort sur une étagère ne te rapporte rien. Dès que ta session est terminée,
        mets tes livres en vente. Plus tu vends tôt, plus tu as de chances de trouver un acheteur :
        les étudiants de la prochaine session cherchent leurs manuels au même moment.
      </p>
      <p>
        Sur <Link to="/">Classmo</Link>, tu peux créer une annonce en quelques minutes avec des photos
        et un prix. La messagerie intégrée te permet de communiquer directement avec les acheteurs intéressés.
      </p>

      <h2>6. Vérifier la bibliothèque du cégep</h2>
      <p>
        La plupart des bibliothèques de cégep ont des exemplaires de réserve des manuels les plus populaires.
        Tu ne pourras pas les emporter chez toi longtemps, mais c'est une solution pour consulter
        un manuel pontuellement sans avoir à l'acheter.
      </p>

      <h2>En résumé</h2>
      <p>
        Économiser sur les manuels scolaires demande un peu de planification, mais les résultats en valent la peine.
        En combinant l'achat usagé, la comparaison de prix et la revente en fin de session, tu peux facilement
        réduire ta facture de livres de moitié — voire plus.
      </p>
    </>
  )
}
