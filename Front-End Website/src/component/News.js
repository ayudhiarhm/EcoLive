import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function News() {
    const Data =[
        {
          id: 1,
          time: 'Jun 15, 2023',
          content: 'ETH Zurich and EPFL launch green energy coalition',
        },
        {
          id: 2,
          time: 'Jun 15, 2023',
          content: 'ETH Zurich and EPFL launch green energy coalition',
        },
        {
          id: 3,
          time: 'Jun 15, 2023',
          content: 'ETH Zurich and EPFL launch green energy coalition',
        },
    ];
    
    return (
        <div div style={{ backgroundColor: 'rgba(227, 250, 240, 0.3)', height: '50vh', paddingTop: '170px' }} className='min-vh-100 align-items-center'>
            <Container>
                <Row className="text-center">
                    <h1 style={{ marginBottom: '20px' }}>News</h1>
                    <p>Stay informed with ECOLIVE's latest news feature, bringing you updates on sustainable living, enviromental initiatives,</p>
                    <p  style={{ marginBottom: '100px' }}> and inspiring stories from around the world.</p>
                    
                    {Data.map((news) => (
                    <Col key={news.id}>
                        <h6>{news.time}</h6>
                        <p>{news.content}</p>
                    </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default News;