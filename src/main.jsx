import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Global } from './components/context/context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Global>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Global>,
)

