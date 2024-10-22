import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Education = () => {
  const education = [
    { degree: 'BSc in Computer Science', school: 'XYZ University', period: '2015 - 2018', details: 'Focused on web technologies and software development.' }
  ];

  return (
    <Container fluid className="p-5 bg-white" id="education">
      <h2 className="text-center mb-4">Education</h2>
      <Row className="justify-content-center">
        {education.map((edu, index) => (
          <Col md={6} lg={4} key={index} className="mb-3">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>{edu.degree}</Card.Title>
                <Card.Subtitle>{edu.school} ({edu.period})</Card.Subtitle>
                <Card.Text>{edu.details}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Education;
