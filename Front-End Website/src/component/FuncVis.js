import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function FuncVis() {
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [imageSrc, setImageSrc] = useState('');

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const visualization = (e) => {
    e.preventDefault();

    // Logic to generate image based on year and type
    const imageUrl = `https://example.com/images/${year}-${type}.jpg`;

    setImageSrc(imageUrl);
  };

  return (
    <div>
      <Container>
        <Row className='text-center'>
          <form onSubmit={visualization}>
            <label style={{ marginRight: '10px' }}>
              Year: 
            </label>
            <input type="number" value={year} onChange={handleYearChange} style={{width: '80px'}} />
            <label style={{ marginLeft: '30px', marginRight: '10px' }}>
              Country:
            </label>
            <input type="text" value={type} onChange={handleTypeChange} />
            <br />
            <button type="submit" className="btn btn-success" style={{ marginTop: '20px' }}>Analyze</button>
          </form>
        </Row>
        {imageSrc && <img src={imageSrc} alt="Generated Image" />}
      </Container>
    </div>
  );
}

export default FuncVis;
