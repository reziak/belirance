import { createBrowserRouter } from 'react-router-dom'
import { Login } from '../features/auth'
import { Dashboard } from '../features/dashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <Login /> },
      { path: '/dashboard', element: <Dashboard /> },
    ],
  },
])
