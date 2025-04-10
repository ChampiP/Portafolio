import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row>
          <Col md={4}>
            <Image src="ruta/a/tu/foto.jpg" roundedCircle fluid />
          </Col>
          <Col md={8}>
            <h2>Sobre mí</h2>
            <p>
              Soy un desarrollador web con experiencia en React y Bootstrap. Me apasiona crear interfaces de usuario atractivas y funcionales.
            </p>
            <h3>Habilidades</h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Bootstrap</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
