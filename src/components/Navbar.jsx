// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

const NavigationBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Actualiza el atributo "data-theme" en el <html>
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      // Puedes decidir poner un valor por defecto, por ejemplo "light" o eliminar el atributo
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [darkMode]);

  return (
    <Navbar expand="lg" bg="light" variant="light" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/">Mi Portafolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">Sobre mí</Nav.Link>
            <Nav.Link href="#projects">Proyectos</Nav.Link>
            <Nav.Link href="#services">Servicios</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
            {/* Botón de modo oscuro */}
            <Nav.Link
              as="button"
              onClick={() => setDarkMode(!darkMode)}
              className="mode-toggle"
            >
              { darkMode ? 'Modo Claro' : 'Modo Oscuro' }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
