import React from 'react'
import "./navbar.css"
import Landpage from './landpage'
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navbar-style" id="navbarNavDropdown">
      <ul class="navbar-nav buttonf">
        <li class="nav-item ">
          <a class="nav-link" aria-current="page" href="#Home">HOME</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link" href="#Menu">MENU</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link" href="#Planes">PLANES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#Contacto">CONTACTO</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar