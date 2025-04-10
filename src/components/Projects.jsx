// src/components/Projects.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Proyectos</h2>
        <Row>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300x200" alt="Proyecto 1" />
              <Card.Body>
                <Card.Title>Proyecto 1</Card.Title>
                <Card.Text>
                  Breve descripción del proyecto 1.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300x200" alt="Proyecto 2" />
              <Card.Body>
                <Card.Title>Proyecto 2</Card.Title>
                <Card.Text>
                  Breve descripción del proyecto 2.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300x200" alt="Proyecto 3" />
              <Card.Body>
                <Card.Title>Proyecto 3</Card.Title>
                <Card.Text>
                  Breve descripción del proyecto 3.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
