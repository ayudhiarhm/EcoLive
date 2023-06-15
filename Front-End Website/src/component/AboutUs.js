import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AboutUs() {
  return (
    <div style={{ backgroundColor: 'rgba(220, 255, 220, 0.1)', height: '100vh', paddingTop: '80px' }} className='min-vh-150 align-items-center' id='aboutus'>
      <Container>
        <Row>
          <Col className='text-center' style={{ maxWidth: '1000px', margin: '0 auto', padding: '5px'  }}>
            <h1 class="fw-bold">WHO WE ARE & WHAT WE DO</h1>
            <p class="fst-normal"> Ecolive is an application that can help classify waste and provide predictions about future air conditions using machine learning technology. We hope to inspire people to care more about the environment and take action to minimize the adverse effects caused by environmental pollution.</p>
          </Col>
        </Row>
        <Row className='row-cols-md-2 row-cols-1'>
          <Col className='py-5 px-3'>
            <h3>ABOUT US</h3>
            <p class="fw-light">In a world where the impact of our choices is increasingly evident, ECO LIVE strives to provide innovative and practical solutions that align with your values.
            We understand the importance of preserving our planet for future generations, and our brand is dedicated to making sustainable living accessible, enjoyable, and stylish</p>
          </Col>
          <Col className='py-5 px-3'>
            <h3>OUR TEAM</h3>
            <p class="fw-light">We are from C23-PC781 Bangkit 2023 Capstone Team. We are consist from 4 Machine Learning team and 2 Cloud Computing Team.</p>
            <ul>
            <li class="fw-light">M017DSX3613 - Naufal Abiyu Pradana</li>
            <li class="fw-light">M132DSY0470 - Cyntia Aristhawati Rahman</li>
            <li class="fw-light">M185DSY0328 - Ayudhia Surya Taufiqa Rahma</li>
            <li class="fw-light">M354DSY0227 - Niluh Putu Aprillia Puspitadewi Sudarsana Putri </li>
            <li class="fw-light">C149DSX3476 - Fransiskus Xaverius Ferdinan Illumatoris</li>
            <li class="fw-light">C288DSX2887 - Danang Sulistyo Nugroho</li>
            </ul>
          </Col>
        </Row>      
      </Container>
    </div>
  );
}

export default AboutUs;