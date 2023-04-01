import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navbar-style" id="navbarNavDropdown">
      <ul class="navbar-nav buttonf">
        <li class="nav-item ">
          <a class="nav-link" aria-current="page" href="#">HOME</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link" href="#">MENU</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link" href="#">PLANES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">CONTACTO</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar