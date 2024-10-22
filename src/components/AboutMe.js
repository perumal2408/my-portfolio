import React from 'react';
import { Row, Col ,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileImage from './assets/laxman.JPG'; // Import the desktop image
import profileImageMobile from './assets/laxman-mobile.JPG'; // Import the mobile image

function AboutMe() {
  return (
    <section id="about" className="about-section">

        <Row className="align-items-center">
          
          <Col md={6}>
            <img src={profileImage} alt="Profile" className="profile-image desktop-image" />
            <img src={profileImageMobile} alt="Profile" className="profile-image mobile-image" />
          </Col>
          <Col md={6}>
            <h1 className="section-title">Perumal laxman</h1>
            <p className="section-description">
              I am a passionate web and mobile app developer with experience in Flutter, Firebase, React, and NodeJS.
              I specialize in building modern, responsive applications.
            </p>
            <Button variant="primary" className='download-button' href="/perumal_laxman_resume.pdf" download >
          Download CV
        </Button>
          </Col>
        </Row>

    </section>
  );
}

export default AboutMe;