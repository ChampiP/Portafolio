import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  return (
    <section id="services" className="bg-light py-5">
      <Container>
        <h2 className="text-center mb-4">Servicios</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Desarrollo Web</Card.Title>
                <Card.Text>
                  Creación de sitios web responsivos y optimizados para una experiencia de usuario excepcional.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Diseño UX/UI</Card.Title>
                <Card.Text>
                  Diseño de interfaces intuitivas y atractivas que mejoran la interacción del usuario con el producto.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Consultoría SEO</Card.Title>
                <Card.Text>
                  Asesoramiento para mejorar la visibilidad de tu sitio web en los motores de búsqueda.
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
