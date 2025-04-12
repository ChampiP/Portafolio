// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutDetails from './components/AboutDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-details" element={<AboutDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
