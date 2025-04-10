import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'; // Importa los iconos

function App() {
  return (
    <div className="App">
      <NavigationBar />

      {/* Sección de bienvenida con animación AOS */}
      <header className="hero" data-aos="fade-in">
        <div className="container text-center">
          <h1>Hola soy Brayan Champi</h1>
          <p>Desarrollador Full stack e IA</p>

          {/* Botones de redes sociales */}
          <div className="social-buttons">
            <a href="https://www.linkedin.com/in/brayan-champi-14b9a32bb/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin size={40} />
            </a>
            <a href="https://github.com/ChampiP" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub size={40} />
            </a>
            <a href="https://wa.me/51946674643" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaWhatsapp size={40} />
            </a>
          </div>
        </div>
      </header>

      {/* Secciones del portafolio */}
      <AboutMe data-aos="fade-up" />
      <Services data-aos="fade-up" />
      <Projects data-aos="fade-up" />
      <Contact data-aos="fade-up" />

      {/* Pie de página con animación */}
      <footer className="bg-dark text-white text-center py-3" data-aos="fade-up">
        <p>&copy; 2025 ChampiP | Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
