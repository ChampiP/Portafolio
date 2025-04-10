import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Asegúrate de tener este archivo, si no, lo puedes eliminar si no es necesario.
import App from './App'; // Importa tu componente principal 'App'
import reportWebVitals from './reportWebVitals'; // Medición del rendimiento, puedes dejarlo o eliminarlo si no lo necesitas.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // El contenedor donde se monta tu aplicación
);

// Si quieres medir el rendimiento de tu aplicación
reportWebVitals();
