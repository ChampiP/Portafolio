// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaMoon, FaSun } from 'react-icons/fa';
import './Navbar.css';

const NavigationBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Actualiza el atributo "data-theme" en el <html> para controlar la paleta de colores
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <Navbar expand="lg" className="navbar-custom shadow-sm py-3">
      <Container>
        <Navbar.Brand href="/" className="brand fw-bold">
          ChampiP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#about" className="nav-link-custom mx-2">Sobre mí</Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom mx-2">Proyectos</Nav.Link>
            <Nav.Link href="#services" className="nav-link-custom mx-2">Servicios</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom mx-2">Contacto</Nav.Link>
            {/* Botón de modo oscuro con iconos */}
            <Nav.Link
              as="button"
              onClick={() => setDarkMode(!darkMode)}
              className="mode-toggle btn-toggle d-flex align-items-center mx-2"
            >
              {darkMode ? <><FaSun className="me-1" /> Modo Claro</> : <><FaMoon className="me-1" /> Modo Oscuro</>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
