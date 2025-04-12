// src/components/Contact.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './Contact.css'; // Importamos los estilos personalizados

const Contact = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_190x1rj',
        'template_7gvm3nc',
        e.target,
        'QByXsLtYv6YNEVptg'
      )
      .then(
        (result) => {
          setStatus('Mensaje enviado correctamente');
          e.target.reset();
        },
        (error) => {
          setStatus('Hubo un error. Intenta nuevamente.');
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <Container className="contact-container">
        <h2>Contacto</h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="user_name"
                  placeholder="Ingresa tu nombre"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="user_email"
                  placeholder="Ingresa tu correo electrónico"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={3}
                  placeholder="Escribe tu mensaje"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
            {status && <p className="contact-status">{status}</p>}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
