import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'

export const RequireAuth = () => {
  const { user } = useAuth()
  const location = useLocation()

  if (!user) return <Navigate to="/" state={{ from: location }} />

  return <Outlet />
}
