import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Inicializa AOS
AOS.init({
  duration: 800, // Duración de la animación (en ms)
  once: true,    // Las animaciones se ejecutan solo una vez
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
