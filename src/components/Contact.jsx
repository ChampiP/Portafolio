// src/components/Contact.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Llamada a EmailJS
    emailjs
      .sendForm(
        'service_190x1rj', // Aquí pon tu ID de servicio (service_xxx)
        'template_7gvm3nc', // Aquí pon tu ID de plantilla (template_xxx)
        e.target,
        'QByXsLtYv6YNEVptg' // Aquí pon tu clave pública de EmailJS
      )
      .then(
        (result) => {
          setStatus('Mensaje enviado correctamente');
          e.target.reset(); // Limpiar el formulario después del envío
        },
        (error) => {
          setStatus('Hubo un error. Intenta nuevamente.');
        }
      );
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Contacto</h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="user_name" placeholder="Ingresa tu nombre" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="user_email" placeholder="Ingresa tu correo electrónico" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} placeholder="Escribe tu mensaje" required />
              </Form.Group>
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
            {status && <p className="mt-3 text-center">{status}</p>}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
