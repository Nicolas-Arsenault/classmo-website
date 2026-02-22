import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import useDocumentMeta from '../hooks/useDocumentMeta'
import articles from './blog/articles'
import '../styles/blog.css'

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useDocumentMeta({
    title: 'Blogue — Classmo',
    description: 'Conseils et guides pour les étudiants de cégep : économiser sur les manuels scolaires, acheter et vendre des livres usagés, et bien préparer ta rentrée.',
    canonical: 'https://classmo.ca/blog',
  })

  return (
    <div className="blog-page">
      <div className="blog-index-container">
        <header className="blog-index-header">
          <h1>Blogue Classmo</h1>
          <p>Conseils et guides pour les étudiants de cégep</p>
        </header>

        <div className="blog-grid">
          {articles.map(article => (
            <Link to={`/blog/${article.slug}`} key={article.slug} className="blog-card">
              <div className="blog-card-content">
                <time className="blog-card-date" dateTime={article.date}>
                  {new Date(article.date + 'T00:00:00').toLocaleDateString('fr-CA', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h2 className="blog-card-title">{article.title}</h2>
                <p className="blog-card-description">{article.description}</p>
                <span className="blog-card-link">
                  Lire l'article <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
