import { createContext, ReactNode, useCallback, useState } from 'react'
import { api } from '../../../app/lib/axios'
import { LoginFormInputs } from '../Login'

interface AuthContextType {
  loading: boolean
  signIn: (data: LoginFormInputs) => Promise<boolean>
}

export const AuthContext = createContext({} as AuthContextType)

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [loading, setLoading] = useState(false)

  const signIn = useCallback(async (data: LoginFormInputs) => {
    setLoading(true)
    try {
      const response = await api.post('/api/auth', { ...data })

      const userInfo = {
        email: data.email,
        token: response.data,
      }

      localStorage.setItem('belirance@user', JSON.stringify(userInfo))
      return true
    } catch (err) {
      console.error(err)
      return false
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        loading,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
