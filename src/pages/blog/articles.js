/**
 * Blog article metadata registry.
 * Each entry defines the slug (URL path), title, description, publication date,
 * and keywords for SEO. The component is lazy-loaded from ./posts/.
 */

import { lazy } from 'react'

const articles = [
  {
    slug: 'economiser-manuels-scolaires-cegep',
    title: 'Comment économiser sur tes manuels scolaires au cégep',
    description: 'Découvre des astuces concrètes pour payer moins cher tes livres de cégep : acheter usagé, comparer les prix, partager avec tes collègues et utiliser Classmo.',
    date: '2026-02-22',
    keywords: 'économiser manuels scolaires, livres cégep pas cher, manuels usagés cégep, réduire coûts livres étudiants',
    component: lazy(() => import('./posts/EconomiserManuels.jsx')),
  },
  {
    slug: 'acheter-livres-usages-cegep',
    title: 'Où acheter des livres usagés pour le cégep',
    description: 'Tour d\'horizon des meilleures options pour acheter tes manuels scolaires usagés au cégep : groupes Facebook, Kijiji, coops étudiantes et Classmo.',
    date: '2026-02-22',
    keywords: 'acheter livres usagés cégep, manuels scolaires occasion, où trouver livres cégep, marketplace étudiante',
    component: lazy(() => import('./posts/AcheterLivresUsages.jsx')),
  },
  {
    slug: 'vendre-manuels-scolaires-rapidement',
    title: '5 conseils pour vendre tes manuels scolaires rapidement',
    description: 'Apprends comment vendre tes livres de cégep plus vite grâce à de bonnes photos, un prix juste, des réponses rapides et une description honnête.',
    date: '2026-02-22',
    keywords: 'vendre manuels scolaires, vendre livres cégep, revendre manuels usagés, conseils vente livres étudiants',
    component: lazy(() => import('./posts/VendreManuels.jsx')),
  },
  {
    slug: 'guide-rentree-cegep',
    title: 'Guide de la rentrée au cégep : comment bien se préparer',
    description: 'Tout ce que tu dois savoir pour ta rentrée au cégep : orientation, matériel, budget, manuels scolaires et conseils pratiques.',
    date: '2026-02-22',
    keywords: 'rentrée cégep, préparation cégep, guide étudiant cégep, premier jour cégep, matériel scolaire cégep',
    component: lazy(() => import('./posts/GuideRentreeCegep.jsx')),
  },
  {
    slug: 'verifier-etat-manuel-scolaire-usage',
    title: "Comment vérifier l'état d'un manuel scolaire usagé avant d'acheter",
    description: "Apprends à évaluer l'état d'un livre usagé avant de l'acheter : reliure, pages, surlignage, édition et ce qu'il faut vérifier.",
    date: '2026-02-22',
    keywords: 'vérifier état manuel usagé, acheter livre occasion, condition livre scolaire, évaluer manuel cégep',
    component: lazy(() => import('./posts/ChoisirManuelsUsages.jsx')),
  },
]

export default articles
