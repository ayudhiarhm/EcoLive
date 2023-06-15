import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <div style={{ backgroundColor: 'rgba(220, 255, 220, 0.1)', height: '50vh', paddingTop: '170px' }} className='min-vh-100 align-items-center'>
    <Container>
      <Row>
        <Col className='text-center'>
          <h1> Why EcoLive?</h1>
        </Col>
      </Row>
      <Row className='row-cols-lg-3 row-cols-md-2 row-cols-1'>
        <Col className='text-center py-5 px-3'>
            <i class="fa-solid fa-users fs-2 mb-4"></i>
            <h5 className='fw-semibold'>User Friendly</h5>
            <p>Our team focus on creating responsive website user friendly and easy to use</p>
        </Col>
        <Col className='text-center py-5 px-3'>
            <i class="fa-solid fa-shapes fs-2 mb-4"></i>
            <h5 className='fw-semibold'>Education</h5>
            <p>Our feature can help to understand the classification of waste</p>
        </Col>
        <Col className='text-center py-5 px-3'>
            <i class="fa-solid fa-chart-simple fs-2 mb-4"></i>
            <h5 className='fw-semibold'>Data Visualization</h5>
            <p>Experience the power of data for more sustainable future</p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default About;