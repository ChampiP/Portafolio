// src/components/AboutMe.jsx
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import logo from '../assets/logo.svg';

const AboutMe = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center">
            <Image src={logo} roundedCircle fluid alt="Logo" />
          </Col>
          <Col md={8}>
            <h2>Sobre Mí</h2>
            <p>
              Hola, soy [Tu Nombre], un desarrollador web apasionado por crear experiencias modernas y responsivas. Me especializo en React y diseño móvil.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
