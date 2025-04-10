import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavigationBar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <AboutMe />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
