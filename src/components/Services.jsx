// Ejemplo en Services.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCode, FaPaintBrush, FaLaptop } from 'react-icons/fa';

const ICON_SIZE = 40; // Tamaño uniforme para todos los íconos

// Arreglo de servicios para facilitar la escalabilidad
const servicesData = [
  {
    icon: <FaCode size={ICON_SIZE} color="var(--primary-color)" aria-label="Desarrollo Web" />,
    title: 'Desarrollo Web',
    description: 'Construyo sitios web modernos y responsivos.'
  },
  {
    icon: <FaPaintBrush size={ICON_SIZE} color="var(--primary-color)" aria-label="Diseño de Interfaces" />,
    title: 'Diseño de Interfaces',
    description: 'Interfaces intuitivas y atractivas.'
  },
  {
    icon: <FaLaptop size={ICON_SIZE} color="var(--primary-color)" aria-label="Consultoría" />,
    title: 'Consultoría',
    description: 'Asesoramiento en estrategias digitales.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-5">
      <Container>
        <h2 className="text-center">Servicios</h2>
        <Row>
          {servicesData.map((service, index) => (
            <Col key={index} md={4} className="text-center mb-4">
              {service.icon}
              <h5 className="mt-3">{service.title}</h5>
              <p>{service.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
