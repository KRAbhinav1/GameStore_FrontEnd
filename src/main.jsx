import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId='1068878277213-416omlmj10ikj978nj4kpblfu6vu310o.apps.googleusercontent.com'>
      <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
