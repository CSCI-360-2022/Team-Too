import React, { useEffect } from 'react'
import { Table, Container, Dropdown, DropdownButton, Row, Col, Button } from 'react-bootstrap'
import './styles.css'
import { useState } from 'react'
import { seatData } from '../__mocks__/mockdata'
import Modal from 'react-bootstrap/Modal'
import image from '../images/image.png'
import ApiCalendar from 'react-google-calendar-api';






function CartContainer({itemNumber,passCart}) {
  const [total, setTotal] = useState(0)
  const [taxes, setTaxes] = useState(0)
  const [price, setPrice] = useState(0)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const config = {
    "clientId": "14231321492-kipqi5npab3hl2cq53djkuja885tj8ad.apps.googleusercontent.com",
    "apiKey": "AIzaSyDSlgppEUwIRdek6wN5EwzicbvJjzOCDGo",
    "scope": "https://www.googleapis.com/auth/calendar",
    "discoveryDocs": [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
    ]
  }

  const apiCalendar = new ApiCalendar(config)

  const eventFromNow = {
    time: 480,
    summary: 'Event from now',
    
  }

  useEffect(() => {
    let newTotal = 0
   passCart.map((seat) => {
      console.log(seat.price)
      newTotal += seat.price
    })
    setPrice(newTotal)
    setTaxes(newTotal * 0.07)  
    setTotal(newTotal + (newTotal * 0.07))
  }, [])
  
  const createEvent = (e) => {
    apiCalendar.createEventFromNow(eventFromNow)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  


  const whateva = 'catdog'
  return (
    <>
    <Container className="cart-container">
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Seat </th>
                <th>{17*73}</th>
                {/* <th>Date</th>
                <th>Edit</th> */}
              </tr>
            </thead>
            <tbody>
              {passCart.map((seat,i) => {
                return (
                  <tr key={i}>
                    <td>{seat.seatId}</td>
                    <td>{seat.price}</td>
                  </tr>
                )
              })}
              {/* <tr>
               
                <td>item: {passCart}</td>
                <td></td>
                <td></td>
                <td>
                  <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                 
                    <Dropdown.Item href="#/action-1">Delete</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </DropdownButton>
                </td>
              </tr> */}
              {/* <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </DropdownButton>
                </td>
              </tr> */}
            </tbody>
          </Table>
        </Col>
        <Col>
          <Container>
            <Row>Account Info</Row>
            <Row>
              <Col>Coupon Code Here</Col>
              <Col><Button>Apply</Button></Col>
            </Row>
            <Row>
              <Col>Price</Col>
              <Col>${price.toFixed(2)}</Col>
            </Row>
            <Row>
              <Col>Taxes</Col>
              <Col>${taxes.toFixed(2)}</Col>
            </Row>
            <Row>
              <Col>Total</Col>
              <Col>${total.toFixed(2)}</Col>
            </Row>
            <Row>
              <img src={image} onClick = {handleShow} />
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className='cart-footer'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur corporis laboriosam molestiae dolore alias omnis maiores eaque consectetur hic doloremque odit accusantium, architecto quidem in optio? Consectetur explicabo pariatur molestias.  
      </Row>
    </Container>

          <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Payment</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="info" onClick={(e)=>createEvent(e)}>
              Add to Calendar
            </Button>
            <Button varient="danger" onClick={()=>apiCalendar.handleAuthClick()}>
              Sign In
              </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </>
  )
}



export default CartContainer