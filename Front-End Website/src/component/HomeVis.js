import { Container, Row, Col } from 'react-bootstrap';

function HomeVis() {
  return (
    <div style={{ backgroundColor: 'rgba(227, 255, 246, 0.4)', height: '100vh' }} className='min-vh-100 align-items-center'>
      <Container>
        <Row className='row-cols-md-2 row-cols-1'>
          <div style={{paddingTop : '210px'}}>
            <Col className='text-center py-5 px-3'>
              <h1>Select to view</h1>
              <p class="lead">Experience the power of data to help you make the right decisions for a more sustainable future</p>
              <a class="btn btn-primary" href="#" role="button">Explore</a>
            </Col>
          </div>
          <Col className='text-center py-5 px-3'>
            <h5 className='fw-semibold'>Foto contoh proses</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeVis;