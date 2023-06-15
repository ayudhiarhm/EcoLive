import { Container, Row, Col } from 'react-bootstrap';
import Func from './FuncVis';

function FeatureVis() {
  return (
    <div style={{ backgroundColor: 'rgba(245, 245, 220, 0.1)', height: '100vh' }} className='min-vh-100 align-items-center' id='visual'>
      <Container>
        <Row className='row-cols-md-2 row-cols-1'>
          <Col>
            <div style={{paddingTop : '100px'}}>
              <Func />
            </div>
          </Col>
          <Col className='text-center px-3'>
            <div style={{paddingTop : '210px'}}>
              <h1>Select to view</h1>
              <p class="lead">Experience the power of data for more sustainable future</p>
            </div>
          </Col>  
        </Row>
      </Container>
    </div>
  );
}

export default FeatureVis;