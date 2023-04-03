import React, { useContext } from "react";
import "./navbar.css"
import Landpage from './landpage'
import { Link } from "react-router-dom";
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
            <Link to="/">  
          <a class="nav-link" aria-current="page">HOME</a>
            </Link>
        </li>
        <li class="nav-item ">
        <Link to="/menu">
          <a class="nav-link" >MENU</a>
        </Link>
        </li>
        <li class="nav-item ">
            <Link to="/planes" >  
          <a class="nav-link" href="#Planes">PLANES</a>
            </Link >
        </li>
        <li class="nav-item">
            <Link to="contacto">  
          <a class="nav-link " href="#Contacto">CONTACTO</a>
            </Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar