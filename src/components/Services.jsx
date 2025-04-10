// Ejemplo en Services.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCode, FaPaintBrush, FaLaptop } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className="py-5">
      <Container>
        <h2 className="text-center">Servicios</h2>
        <Row>
          <Col md={4} className="text-center">
            <FaCode size={40} color="var(--primary-color)" />
            <h5>Desarrollo Web</h5>
            <p>Construyo sitios web modernos y responsivos.</p>
          </Col>
          <Col md={4} className="text-center">
            <FaPaintBrush size={40} color="var(--primary-color)" />
            <h5>Diseño de Interfaces</h5>
            <p>Interfaces intuitivas y atractivas.</p>
          </Col>
          <Col md={4} className="text-center">
            <FaLaptop size={40} color="var(--primary-color)" />
            <h5>Consultoría</h5>
            <p>Asesoramiento en estrategias digitales.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
