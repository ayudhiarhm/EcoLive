import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../asset/img/logoecolive50x50.png'

function Navigationbar() {
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" className="navbar-logo" />
              EcoLive
          </Navbar.Brand>
          <Nav className="mx-auto text-center">
            <Nav.Link href="#home" className="mx-3 bold-text">Home</Nav.Link>
            <NavDropdown title="Features" id="navbarScrollingDropdown">
              <NavDropdown.Item href= "#imagerecognition">Image Recognition</NavDropdown.Item>
              <NavDropdown.Item href="#visual">Visualization</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#news" className="mx-3 bold-text">News</Nav.Link>
            <Nav.Link href="#aboutus" className="mx-3 bold-text">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>  
    </>
  );
}

export default Navigationbar;