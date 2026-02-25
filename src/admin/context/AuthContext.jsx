import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

const STORAGE_KEYS = {
  accessToken: 'classmo_access_token',
  refreshToken: 'classmo_refresh_token',
  user: 'classmo_user',
}

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null)
  const [refreshToken, setRefreshToken] = useState(null)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedToken = localStorage.getItem(STORAGE_KEYS.accessToken)
    const storedRefresh = localStorage.getItem(STORAGE_KEYS.refreshToken)
    const storedUser = localStorage.getItem(STORAGE_KEYS.user)

    if (storedToken && storedUser) {
      try {
        const parsed = JSON.parse(storedUser)
        if (parsed.role === 'ADMIN') {
          setAccessToken(storedToken)
          setRefreshToken(storedRefresh)
          setUser(parsed)
        } else {
          localStorage.removeItem(STORAGE_KEYS.accessToken)
          localStorage.removeItem(STORAGE_KEYS.refreshToken)
          localStorage.removeItem(STORAGE_KEYS.user)
        }
      } catch {
        localStorage.removeItem(STORAGE_KEYS.user)
      }
    }
    setIsLoading(false)
  }, [])

  async function login(email, password) {
    try {
      const res = await fetch('http://192.168.1.95:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (!res.ok) {
        const text = await res.text()
        let message = 'Identifiants invalides'
        try {
          const json = JSON.parse(text)
          if (json.message) message = json.message
        } catch { /* use default */ }
        return { success: false, error: message }
      }

      const data = await res.json()

      if (data.role !== 'ADMIN') {
        return { success: false, error: 'Accès réservé aux administrateurs.' }
      }

      const userData = {
        userId: data.userId,
        email: data.email,
        fullName: data.fullName,
        role: data.role,
      }

      localStorage.setItem(STORAGE_KEYS.accessToken, data.accessToken)
      localStorage.setItem(STORAGE_KEYS.refreshToken, data.refreshToken)
      localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(userData))

      setAccessToken(data.accessToken)
      setRefreshToken(data.refreshToken)
      setUser(userData)

      return { success: true }
    } catch {
      return { success: false, error: 'Erreur réseau. Vérifie ta connexion.' }
    }
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEYS.accessToken)
    localStorage.removeItem(STORAGE_KEYS.refreshToken)
    localStorage.removeItem(STORAGE_KEYS.user)
    setAccessToken(null)
    setRefreshToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{
      accessToken,
      refreshToken,
      user,
      isAuthenticated: !!accessToken,
      isLoading,
      login,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
