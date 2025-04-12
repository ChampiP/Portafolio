// src/components/Projects.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Arreglo de proyectos para facilitar la escalabilidad y mantenimiento
const projectsData = [
  {
    id: 1,
    title: 'Proyecto 1',
    description: 'Breve descripción del proyecto 1.',
    imageUrl: 'https://via.placeholder.com/300x200',
    altText: 'Imagen representativa del Proyecto 1'
  },
  {
    id: 2,
    title: 'Proyecto 2',
    description: 'Breve descripción del proyecto 2.',
    imageUrl: 'https://via.placeholder.com/300x200',
    altText: 'Imagen representativa del Proyecto 2'
  },
  {
    id: 3,
    title: 'Proyecto 3',
    description: 'Breve descripción del proyecto 3.',
    imageUrl: 'https://via.placeholder.com/300x200',
    altText: 'Imagen representativa del Proyecto 3'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Proyectos</h2>
        <Row>
          {projectsData.map((project) => (
            <Col key={project.id} md={4} className="mb-3">
              <Card>
                <Card.Img 
                  variant="top" 
                  src={project.imageUrl} 
                  alt={project.altText} 
                  loading="lazy" 
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
