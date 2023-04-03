import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './navbar'
import Landpage from './landpage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Landpage/>
  </React.StrictMode>,
)
