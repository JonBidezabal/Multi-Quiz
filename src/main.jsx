import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './UserContext.jsx'
import { DataProvider } from './DataContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <UserProvider>
  <DataProvider>
  <App />
  </DataProvider>
  </UserProvider>
  </React.StrictMode>,
)
