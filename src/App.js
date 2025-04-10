// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
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
      <AboutMe />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
