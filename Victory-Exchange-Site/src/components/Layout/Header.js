import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import firebase from 'firebase';
import { GlobalStyel } from '../Layout/GlobalStyle';

function Header(props) {
  // const navStyle = {
  //   // background: '#FFFFFF',
  //   height: '4rem',
  //   boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.05)'
  // };
  return (
    <Navbar collapseOnSelect expand='lg' variant='light' style={{ background: 'white' }}>
      <Container>
        <Navbar.Brand as={Link} to='/Home'>
          Victory Exchange
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link as={Link} to='/dashboard'>
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to='/findpods'>
              Find Pods
            </Nav.Link>

            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/contact'>
              Contact Us
            </Nav.Link>

            {props.auth ? (
              <Nav.Link as={Link} to='/login'>
                Sign in
              </Nav.Link>
            ) : (
              <Nav.Link
                onClick={() => {
                  firebase.auth().signOut();
                }}>
                Log out
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
