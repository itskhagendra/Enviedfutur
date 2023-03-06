import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "../Assets/Css/Home.css"

function NavbarComponent() {
  return (
    <Navbar style={{height:'50px'}} expand="lg">
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src="Images/logo.png"
              width="auto"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <span className='TextLogoStyle'>Envied FutuR</span>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavbarComponent