import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaWordpress, FaDownload
} from 'react-icons/fa';
import { SiBootstrap, SiMysql, SiPython } from 'react-icons/si';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-md-start text-center">
            {/* Intro animada */}
            <p className="text-muted mb-1">Conóceme mejor</p>
            <h2>Quién soy</h2>
            <h1 className="fw-bold">Soy Brayan Champi</h1>
            <p>
              Me dedico desde hace 2 años al diseño y desarrollo web y software.
              Estoy en constante aprendizaje de las tecnologías que ya domino,
              asimismo busco aprender nuevas tecnologías para enriquecer mis habilidades
              y mejorar mis buenas prácticas como desarrollador.
            </p>

            {/* Botón de descarga con ícono */}
            <Button
              variant="primary"
              href="/cv.pdf"
              download
              className="mt-3 d-inline-flex align-items-center gap-2"
            >
              <FaDownload /> Descargar CV
            </Button>
          </Col>

          <Col md={6} className="text-center mt-4 mt-md-0">
            <div className="skills-container">
              <h3 className="skills-title mb-4">SKILLS</h3>
              <div className="tech-icons">
                <FaHtml5 title="HTML5" aria-label="HTML5" className="tech-icon" />
                <FaCss3Alt title="CSS3" aria-label="CSS3" className="tech-icon" />
                <FaJs title="JavaScript" aria-label="JavaScript" className="tech-icon" />
                <FaReact title="React" aria-label="React" className="tech-icon" />
                <FaNodeJs title="Node.js" aria-label="Node.js" className="tech-icon" />
                <SiMysql title="MySQL" aria-label="MySQL" className="tech-icon" />
                <SiBootstrap title="Bootstrap" aria-label="Bootstrap" className="tech-icon" />
                <FaGitAlt title="Git" aria-label="Git" className="tech-icon" />
                <SiPython title="Python" aria-label="Python" className="tech-icon" />
                <FaWordpress title="WordPress" aria-label="WordPress" className="tech-icon" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
