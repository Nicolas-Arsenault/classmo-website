import { Suspense } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import Blog from './pages/Blog'
import BlogPost from './pages/blog/BlogPost'
import useDocumentMeta from './hooks/useDocumentMeta'
import { AuthProvider } from './admin/context/AuthContext'
import AdminLogin from './admin/pages/AdminLogin'
import Dashboard from './admin/pages/Dashboard'
import ProtectedRoute from './admin/components/ProtectedRoute'

function LandingPage() {
  useDocumentMeta({
    title: 'Classmo — Manuels scolaires à prix étudiant',
    description: 'Achète et vends tes manuels scolaires de cégep entre étudiants. Gratuit, sans commission. Économise jusqu\'à 70% sur tes livres.',
    canonical: 'https://classmo.ca/',
  })

  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <FAQ />
      <CTA />
    </main>
  )
}

export default function App() {
  const location = useLocation()

  if (location.pathname.startsWith('/admin')) {
    return (
      <AuthProvider>
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute><Dashboard /></ProtectedRoute>
          } />
          <Route path="/admin/*" element={<Navigate to="/admin/login" replace />} />
        </Routes>
      </AuthProvider>
    )
  }

  return (
    <>
      <Navbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}
