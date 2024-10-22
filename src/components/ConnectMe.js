import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

const ConnectMe = () => {
  return (
    <Container fluid className="p-5 bg-white text-center contact-section" id="contact">
      <Row>
        <Col>
          <h2 className="mb-4 connect-with-me section-title ">Connect Me</h2>
          <a href="mailto:perumallax2408@gmail.com" className="me-2 social-icon">
            <FaEnvelope size={30} style={{ color: '#D44638' }} /> {/* Gmail red */}
          </a>
          <a href="https://www.linkedin.com/in/perumal-laxman-766407210/" className="me-2 social-icon">
            <FaLinkedin size={30} style={{ color: '#0077b5' }} /> {/* LinkedIn blue */}
          </a>
          <a href="https://github.com/perumal2408" className="me-2 social-icon">
            <FaGithub size={30} style={{ color: '#333' }} /> {/* GitHub black */}
          </a>
          <a href="tel:+1234567890" className="me-2 social-icon">
            <FaPhone size={30} style={{ color: '#25D366' }} /> {/* WhatsApp green */}
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default ConnectMe;
