import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Proyectos</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="ruta/a/imagen1.jpg" />
              <Card.Body>
                <Card.Title>Proyecto 1</Card.Title>
                <Card.Text>
                  Descripción breve del proyecto 1. Aquí puedes hablar sobre la tecnología usada, el impacto o cualquier detalle relevante.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Agregar más proyectos aquí */}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
