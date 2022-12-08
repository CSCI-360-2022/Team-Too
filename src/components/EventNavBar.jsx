import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import cofclogo from '../images/cofclogo.png'
import './styles.css';
import {useNavigate} from 'react-router';

function EventNavBar({itemNumber}) {
  const navigate = useNavigate();

  const navEventList = () => {
    navigate('/eventlist')
  }

  const navCart = () => {
    navigate('/cart')
  }

  const navMain = () => {
    navigate('/')
  }

  return (
    <Navbar expand="lg" className='navbar'>
    <Container>
      <Navbar.Brand onClick={navMain}>          
          <img
            className="d-block w-100"
            src={cofclogo}
            alt="cofc-logo"
          />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link onClick={navEventList} className='navbar-links'>Upcoming Events</Nav.Link>  
        </Nav>
        <Button className='navbar-btn' onClick={navCart} >Cart {itemNumber}</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default EventNavBar