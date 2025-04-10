import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import logo from '../assets/logo.svg';

const AboutMe = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2>Sobre mí</h2>
            <p>
              ¡Hola! Soy un desarrollador web apasionado por crear interfaces
              modernas y responsivas. Me encanta trabajar con React y Bootstrap para
              construir experiencias digitales únicas.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <Image src={logo} roundedCircle fluid alt="Mi Foto" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
