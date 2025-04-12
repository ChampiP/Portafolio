// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaMoon, FaSun } from 'react-icons/fa';
import './Navbar.css';

const NavigationBar = () => {
  // Inicializa darkMode basado en el valor guardado en localStorage o predeterminado a false
  const [darkMode, setDarkMode] = useState(() => {
    const savedPreference = localStorage.getItem('darkMode');
    return savedPreference ? JSON.parse(savedPreference) : false;
  });

  // Actualiza el atributo data-theme en el documento y guarda la preferencia en localStorage
  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
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
            {/* Botón de modo oscuro/claro, usando un elemento semántico <button> */}
            <button
              onClick={() => setDarkMode(prevMode => !prevMode)}
              className="mode-toggle btn-toggle d-flex align-items-center mx-2"
              aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
            >
              {darkMode ? (
                <>
                  <FaSun className="me-1" /> Modo Claro
                </>
              ) : (
                <>
                  <FaMoon className="me-1" /> Modo Oscuro
                </>
              )}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
