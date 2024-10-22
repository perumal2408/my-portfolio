import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <Container>
        <h1 className="section-title">Experience</h1>
        <Row>
          <Col md={12}>
            <div className="experience-card">
              <h3>Web Developer - The Hindu</h3>
              <p>Nov 2021 - Present</p>
              <ul>
                <li>Developed mobile apps using Flutter and Firebase.</li>
                <li>Worked on full-stack solutions for various applications.</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
