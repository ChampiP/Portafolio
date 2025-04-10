impo// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Asegúrate de importar App correctamente
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Este es el contenedor principal donde se renderiza la aplicación
);

// Si quieres medir el rendimiento de tu aplicación
reportWebVitals();
