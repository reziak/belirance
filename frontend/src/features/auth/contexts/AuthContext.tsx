import { createContext, ReactNode, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../../../app/lib/axios'
import { LoginFormInputs } from '../Login'

interface AuthContextType {
  user: string | null
  loading: boolean
  signIn: (data: LoginFormInputs) => Promise<boolean>
  signOut: () => void
}

export const AuthContext = createContext({} as AuthContextType)

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [user, setUser] = useState<string | null>(null)

  const signIn = async (data: LoginFormInputs) => {
    setLoading(true)
    try {
      const response = await api.post('/api/auth', { ...data })

      const userInfo = {
        email: data.email,
        token: response.data,
      }

      setUser(data.email)
      localStorage.setItem('belirance@user', JSON.stringify(userInfo))
      return true
    } catch (err: any) {
      console.error(err.response)
      toast.error(err.response.data.message)
      return false
    } finally {
      setLoading(false)
    }
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem('belirance@user')
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('belirance@user') || '{}')
    setUser(user?.email || null)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
