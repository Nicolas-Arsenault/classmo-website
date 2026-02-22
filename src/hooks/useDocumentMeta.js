import { useEffect } from 'react'

/**
 * Sets document title, meta tags, canonical URL, and optional JSON-LD structured data.
 * Cleans up dynamically-added tags on unmount so pages don't leak meta into each other.
 *
 * @param {Object} options
 * @param {string} options.title - Page title
 * @param {string} options.description - Meta description
 * @param {string} options.canonical - Canonical URL
 * @param {string} [options.ogType] - Open Graph type (default: "website")
 * @param {string} [options.ogImage] - OG image URL
 * @param {Object} [options.jsonLd] - JSON-LD structured data object
 */
export default function useDocumentMeta({ title, description, canonical, ogType = 'website', ogImage = 'https://classmo.ca/og-image.png', jsonLd }) {
  useEffect(() => {
    const prev = document.title
    document.title = title

    const tags = []

    function setMeta(attr, attrValue, content) {
      let el = document.querySelector(`meta[${attr}="${attrValue}"]`)
      const existed = !!el
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, attrValue)
        document.head.appendChild(el)
      }
      const prevContent = el.getAttribute('content')
      el.setAttribute('content', content)
      tags.push({ el, existed, attr, attrValue, prevContent })
    }

    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonical)
    setMeta('property', 'og:type', ogType)
    setMeta('property', 'og:image', ogImage)
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', ogImage)

    let linkEl = document.querySelector('link[rel="canonical"]')
    const linkExisted = !!linkEl
    let prevHref
    if (!linkEl) {
      linkEl = document.createElement('link')
      linkEl.setAttribute('rel', 'canonical')
      document.head.appendChild(linkEl)
    } else {
      prevHref = linkEl.getAttribute('href')
    }
    linkEl.setAttribute('href', canonical)

    let scriptEl
    if (jsonLd) {
      scriptEl = document.createElement('script')
      scriptEl.type = 'application/ld+json'
      scriptEl.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(scriptEl)
    }

    return () => {
      document.title = prev
      tags.forEach(({ el, existed, prevContent }) => {
        if (existed) {
          el.setAttribute('content', prevContent)
        } else {
          el.remove()
        }
      })
      if (linkExisted) {
        linkEl.setAttribute('href', prevHref)
      } else {
        linkEl.remove()
      }
      if (scriptEl) scriptEl.remove()
    }
  }, [title, description, canonical, ogType, ogImage, jsonLd])
}
