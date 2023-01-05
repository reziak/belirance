import { RouterProvider } from 'react-router-dom'
import { router } from './app/router'
import { AuthContextProvider } from './features/auth/contexts/AuthContext'

import { globalStyles } from './styles/global'

function App() {
  globalStyles()

  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  )
}

export default App
