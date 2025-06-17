import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import auth0 from 'auth0-js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthCallback from './auth-callback.tsx'
import CrossOriginVerification from './cross-origin-verification.tsx'

export const webAuth = new auth0.WebAuth({
  domain: 'auth.kedarbasutkar.com',
  clientID: 'RPy1yQLh5mrsQxlpn5uyKOBouTDQL9G6',
  scope: 'email'
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'auth-callback',
    element: <AuthCallback />
  },
  {
    path: 'cross-origin-verification',
    element: <CrossOriginVerification />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
