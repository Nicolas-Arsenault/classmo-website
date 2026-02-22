import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Suspense } from 'react'
import { ArrowLeft } from 'lucide-react'
import useDocumentMeta from '../../hooks/useDocumentMeta'
import articles from './articles'
import '../../styles/blog.css'

export default function BlogPost() {
  const { slug } = useParams()
  const article = articles.find(a => a.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!article) return <Navigate to="/blog" replace />

  const Component = article.component
  const canonical = `https://classmo.ca/blog/${article.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: { '@type': 'Organization', name: 'Classmo' },
    publisher: {
      '@type': 'Organization',
      name: 'Classmo',
      logo: { '@type': 'ImageObject', url: 'https://classmo.ca/classmo-icon.png' },
    },
    url: canonical,
    inLanguage: 'fr-CA',
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  }

  useDocumentMeta({
    title: `${article.title} — Classmo`,
    description: article.description,
    canonical,
    ogType: 'article',
    jsonLd,
  })

  return (
    <div className="blog-page">
      <article className="blog-post-container">
        <Link to="/blog" className="blog-back-link">
          <ArrowLeft size={16} />
          Retour au blogue
        </Link>

        <header className="blog-post-header">
          <h1 className="blog-post-title">{article.title}</h1>
          <time className="blog-post-date" dateTime={article.date}>
            {new Date(article.date + 'T00:00:00').toLocaleDateString('fr-CA', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </header>

        <div className="blog-post-content">
          <Suspense fallback={<div className="blog-loading">Chargement...</div>}>
            <Component />
          </Suspense>
        </div>

        <footer className="blog-post-footer">
          <div className="blog-cta-box">
            <h3>Prêt à économiser sur tes manuels?</h3>
            <p>
              Classmo est l'application gratuite pour acheter et vendre des manuels scolaires entre étudiants de cégep.
              Aucune commission, aucun frais.
            </p>
            <Link to="/#cta" className="blog-cta-button">
              Télécharger Classmo
            </Link>
          </div>

          <div className="blog-related">
            <h3>Articles connexes</h3>
            <ul>
              {articles
                .filter(a => a.slug !== slug)
                .slice(0, 3)
                .map(a => (
                  <li key={a.slug}>
                    <Link to={`/blog/${a.slug}`}>{a.title}</Link>
                  </li>
                ))}
            </ul>
          </div>
        </footer>
      </article>
    </div>
  )
}
