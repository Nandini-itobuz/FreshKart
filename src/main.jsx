import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header.jsx'
import { AppProvider } from './services/AppContext.jsx'
import { AuthProvider } from './services/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Header />
          <div className='app-container'>
            <App />
          </div>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>

  </React.StrictMode>,
)
