import { Link } from 'react-router-dom'

export default function ChoisirManuelsUsages() {
  return (
    <>
      <p>
        Acheter un manuel scolaire usagé est une excellente façon d'économiser, mais encore faut-il
        s'assurer que le livre est en bon état. Voici ce qu'il faut vérifier avant de conclure
        un achat, que ce soit en personne ou à partir de photos.
      </p>

      <h2>1. La couverture</h2>
      <p>
        La couverture est la première chose que tu vois, et elle en dit beaucoup sur l'utilisation
        passée du livre.
      </p>
      <ul>
        <li><strong>Coins et bords :</strong> des coins légèrement usés sont normaux, mais des coins très abîmés ou pliés indiquent une utilisation intensive</li>
        <li><strong>Dos du livre :</strong> vérifie qu'il n'est pas cassé — un dos cassé signifie que des pages peuvent se détacher</li>
        <li><strong>Taches ou décoloration :</strong> des marques mineures sont acceptables, mais des taches d'eau ou de nourriture peuvent affecter les pages intérieures</li>
      </ul>

      <h2>2. La reliure</h2>
      <p>
        La reliure tient le livre ensemble. C'est l'élément le plus important à vérifier.
      </p>
      <ul>
        <li>Ouvre le livre complètement à plusieurs endroits — les pages doivent rester bien attachées</li>
        <li>Vérifie que la colle de la reliure n'est pas sèche ou craquelée</li>
        <li>Si des pages sont déjà détachées, le livre risque de se démonter rapidement avec l'utilisation</li>
      </ul>
      <p>
        Un livre avec une reliure faible peut devenir inutilisable en milieu de session.
        C'est un critère sur lequel il ne faut pas faire de compromis.
      </p>

      <h2>3. Les pages</h2>
      <p>
        Feuillette le livre pour vérifier l'état des pages :
      </p>
      <ul>
        <li><strong>Pages cornées :</strong> des pages pliées sont un défaut mineur et purement esthétique</li>
        <li><strong>Pages manquantes :</strong> vérifie la numérotation, surtout dans les sections que tu utiliseras le plus</li>
        <li><strong>Pages jaunies :</strong> c'est normal pour un livre plus ancien et n'affecte pas la lisibilité</li>
        <li><strong>Pages déchirées :</strong> une petite déchirure en marge est acceptable, mais une déchirure dans le texte rend la page difficile à lire</li>
      </ul>

      <h2>4. Le surlignage et les annotations</h2>
      <p>
        C'est souvent le sujet le plus discuté quand on achète un livre usagé. Voici comment l'évaluer :
      </p>
      <ul>
        <li><strong>Surlignage léger :</strong> quelques passages surlignés par-ci par-là ne gênent généralement pas la lecture</li>
        <li><strong>Surlignage excessif :</strong> si chaque page est entièrement surlignée en plusieurs couleurs, ça peut rendre la lecture plus difficile</li>
        <li><strong>Notes dans les marges :</strong> des annotations au crayon sont faciles à effacer; au stylo, c'est permanent</li>
        <li><strong>Exercices complétés :</strong> si le livre contient des exercices à remplir et qu'ils sont déjà faits au stylo, ça peut poser problème</li>
      </ul>
      <p>
        Sur <Link to="/">Classmo</Link>, les vendeurs doivent indiquer la condition de leur manuel,
        ce qui te donne une bonne idée avant même de voir le livre en personne.
      </p>

      <h2>5. L'édition du manuel</h2>
      <p>
        C'est un point crucial qu'il ne faut surtout pas négliger :
      </p>
      <ul>
        <li>Vérifie le numéro d'édition sur la page de titre (pas juste la couverture)</li>
        <li>Compare avec le numéro d'édition exigé par ton professeur</li>
        <li>L'ISBN (le numéro à 13 chiffres au dos du livre) est le moyen le plus fiable de confirmer que c'est le bon livre</li>
      </ul>
      <p>
        Certaines nouvelles éditions ne contiennent que des changements cosmétiques (nouvelle couverture,
        réorganisation des chapitres), tandis que d'autres ont du contenu significativement différent.
        En cas de doute, demande directement à ton professeur si l'édition précédente est acceptable.
      </p>

      <h2>6. Les codes d'accès en ligne</h2>
      <p>
        Beaucoup de manuels incluent un code d'accès pour une plateforme en ligne (exercices,
        ressources complémentaires, etc.). Ces codes sont presque toujours à usage unique.
      </p>
      <ul>
        <li>Demande au vendeur si le code a été utilisé</li>
        <li>Si le code est requis pour ton cours et qu'il a déjà été activé, tu devras en acheter un séparément</li>
        <li>Calcule le coût total (livre usagé + code neuf) et compare avec le prix du livre neuf qui inclut le code</li>
      </ul>

      <h2>En résumé</h2>
      <p>
        Prendre quelques minutes pour bien inspecter un manuel usagé peut t'éviter des mauvaises
        surprises. Concentre-toi sur la reliure et l'édition (les deux points les plus importants),
        puis évalue le surlignage et l'état général selon ta tolérance personnelle. Un livre
        usagé en bon état fait exactement le même travail qu'un livre neuf — pour une fraction du prix.
      </p>
    </>
  )
}
