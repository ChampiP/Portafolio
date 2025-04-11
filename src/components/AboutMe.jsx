// src/components/AboutMe.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaWordpress } from 'react-icons/fa';
import { SiBootstrap, SiMysql, SiPython } from 'react-icons/si';
import './AboutMe.css';

const AboutMe = () => {  
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2>Quien soy</h2>
            <h1>Soy Brayan Champi</h1>
            <p>
              Me dedico desde hace 2 años al diseño y desarrollo web y software. Estoy en constante aprendizaje de las tecnologías que ya domino, 
              asimismo busco aprender nuevas tecnologías para enriquecer mis habilidades y mejorar mis buenas prácticas como desarrollador.
            </p>
            <Button variant="primary" href="/cv.pdf" download className="mt-3">
              Descargar CV
            </Button>
            {/* Botón Ver más que redirige a la página con más detalles */}
            <Button variant="secondary" as={Link} to="/about-details" className="mt-3 ms-2">
              Ver más
            </Button>
          </Col>
          <Col md={6} className="text-center">
            <div className="skills-container">
              <h3 className="skills-title">SKILLS</h3>
              <div className="tech-icons">
                <FaHtml5 title="HTML5" className="tech-icon" />
                <FaCss3Alt title="CSS3" className="tech-icon" />
                <FaJs title="JavaScript" className="tech-icon" />
                <FaReact title="React" className="tech-icon" />
                <FaNodeJs title="Node.js" className="tech-icon" />
                <SiMysql title="MySQL" className="tech-icon" />
                <SiBootstrap title="Bootstrap" className="tech-icon" />
                <FaGitAlt title="Git" className="tech-icon" />
                <SiPython title="Python" className="tech-icon" />
                <FaWordpress title="WordPress" className="tech-icon" />
                {/* Agrega más iconos aquí con la misma estructura para completar grupos de 3 iconos por fila */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
