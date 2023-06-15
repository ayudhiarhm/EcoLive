import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <div style={{ backgroundColor: 'rgba(3, 3, 3, 0.04)'}} className="footer pb-3 pt-4">
            <Container>
                <Row>
                    <Col>
                        <h3>ECOLIVE</h3>
                    </Col>
                    <Col className="text-end">
                        <i class="fa-solid fa-envelope fs-3 mx-lg-3 mx-2"></i>
                        <i class="fa-brands fa-youtube fs-3 mx-lg-3 mx-2"></i>
                        <i class="fa-brands fa-instagram fs-3 mx-lg-3 mx-2"></i>
                    </Col>
                </Row>
                <Row>
                    <p>&copy; ecolive 2023, All Right Reserved. </p>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;