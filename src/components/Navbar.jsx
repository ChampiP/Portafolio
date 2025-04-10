// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css'; // Si quieres usar estilos separados, opcional

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MiPortafolio</div>
      <ul className="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#sobre-mi">Sobre mí</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
