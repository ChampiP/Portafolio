import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="bg-dark text-white py-5">
      <Container>
        <h2 className="text-center mb-4">Contacto</h2>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu nombre" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Escribe tu mensaje" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
