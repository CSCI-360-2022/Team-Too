import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import cofclogo from '../images/cofclogo.png'
import './styles.css';
import {useHistory} from 'react-router';

function EventNavBar({itemNumber}) {
  const history = useHistory();
  const navEventList = () => {
    console.log('stinkyPoopyButthole')
    history.push=('/eventlist')
  }

  return (
    <Navbar expand="lg" className='navbar'>
    <Container>
      <Navbar.Brand href="/">          
          <img
            className="d-block w-100"
            src={cofclogo}
            alt="cofc-logo"
          />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link to='/eventlist' className='navbar-links'>EventList</Nav.Link>
          <Nav.Link to="/event">Event</Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link>
          <>{itemNumber}</>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default EventNavBar