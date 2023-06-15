import { Container, Row, Col } from 'react-bootstrap';

function Hero() {
  return (
    <div className='hero min-vh-100 w-100' id='home'>
      <Container>
        <Row>
          <Col className='text-center'>
            <h2 class="fw-medium">WELCOME TO</h2>
            <h1 class="fw-semibold">ECOLIVE</h1>
            <p class="fw-light">A brand committed to empowering individuals in their pursuit</p>
            <p class="fw-light">of a sustainable and eco-conscious lifestyle</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;