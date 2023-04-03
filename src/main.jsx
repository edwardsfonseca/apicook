import React from 'react'
import ReactDOM from 'react-dom/client'
import Landpage from './landpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contacto from './contacto'
import Navbar from './navbar'
import Footer from './footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
     <Routes>

     <Route element={<Landpage />} path="/" />
     <Route element={<Contacto />} path="/contacto" />
     </Routes>
     <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
