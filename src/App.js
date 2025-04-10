import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavigationBar />

      {/* Sección de bienvenida con animación AOS */}
      <header className="hero" data-aos="fade-in">
        <div className="container text-center">
          <h1>Bienvenido a mi Portafolio</h1>
          <p>Desarrollador Full stack e IA</p>
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
