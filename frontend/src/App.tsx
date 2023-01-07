import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { router } from './app/router'
import { AuthContextProvider } from './features/auth/contexts/AuthContext'

import 'react-toastify/dist/ReactToastify.css'
import './styles/toast-override.css'
import { globalStyles } from './styles/global'

function App() {
  globalStyles()

  return (
    <AuthContextProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        theme="dark"
        pauseOnHover
      />
      <RouterProvider router={router} />
    </AuthContextProvider>
  )
}

export default App
