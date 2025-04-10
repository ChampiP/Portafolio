// src/components/Services.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  return (
    <section id="services" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Servicios</h2>
        <Row>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>Desarrollo Web</Card.Title>
                <Card.Text>
                  Creación de sitios web modernos y responsivos usando las últimas tecnologías.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>Diseño Móvil</Card.Title>
                <Card.Text>
                  Interfaces optimizadas para dispositivos móviles, garantizando la mejor experiencia de usuario.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>Consultoría</Card.Title>
                <Card.Text>
                  Asesoría en tecnologías web y estrategias digitales para potenciar tu negocio.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
