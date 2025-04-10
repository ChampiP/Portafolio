import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Mi Portafolio</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
      
      <div className="container my-5">
        <header>
          <h1 className="text-center text-primary">Bienvenido a Mi Portafolio</h1>
        </header>
        <section>
          <p className="text-center">Este es un ejemplo de cómo integrar Bootstrap en tu proyecto.</p>
          <button className="btn btn-success">¡Haz clic aquí!</button>
        </section>
      </div>
    </div>
  );
}

export default App;
