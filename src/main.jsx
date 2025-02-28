import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import router from './routes/router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
     */}
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>

  </StrictMode>,
)
