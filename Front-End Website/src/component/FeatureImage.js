import { Container, Row, Col } from 'react-bootstrap';
import Func from './FuncImage';

function FeatureImage() {
  return (
    <div style={{ backgroundColor: 'rgba(245, 245, 220, 0.1)', height: '100vh' }} className='min-vh-100 align-items-center' id='imagerecognition'>
      <Container>
        <Row className='row-cols-md-2 row-cols-1'>
          <div style={{paddingTop : '210px'}}>
            <Col className='text-center py-5 px-3' >
              <h1>Upload to classify</h1>
              <p class="lead">Try our feature to simplify your waste classification</p>
            </Col>
          </div>
          <Col>      
            <div style={{paddingTop : '100px'}}>
              <Func />
            </div>
          </Col>  
        </Row>
      </Container>
    </div>
  );
}

export default FeatureImage;