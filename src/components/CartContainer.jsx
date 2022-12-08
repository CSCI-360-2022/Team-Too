import React, { useEffect } from 'react'
import { Table, Container, Dropdown, DropdownButton, Row, Col, Button } from 'react-bootstrap'
import { createPurchasedSeat } from '../graphql/mutations'
import './styles.css'
import { useState } from 'react'
import { seatData } from '../__mocks__/mockdata'
import { API } from 'aws-amplify'
import Modal from 'react-bootstrap/Modal'
import image from '../images/image.png'
import ApiCalendar from 'react-google-calendar-api';
import { useNavigate } from 'react-router'

function CartContainer({passCart}) {
  const [total, setTotal] = useState(0)
  const [taxes, setTaxes] = useState(0)
  const [price, setPrice] = useState(0)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate()
  const returnToHome = () => navigate('/')

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

  const finalizePayment = async () => {
    handleShow()
    passCart.map((ticket) => {
      API.graphql({
        query: createPurchasedSeat,
        variables: {
          input: {
            seatID: ticket.seatId,
            eventID: ticket.eventId,
          }
        }
      })
    })

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
                <th>Seat Price</th>
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
              <img src={image} onClick = {() => finalizePayment()} />
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
            <Modal.Title>Payment Success!</Modal.Title>
          </Modal.Header>
          <Modal.Body>If you'd like to add this event to your google calendar, please click Google Sign In and then Add to Calendar.</Modal.Body>
          <Modal.Footer>
            <Button varient="danger" onClick={()=>apiCalendar.handleAuthClick()}>
              Google Sign In
            </Button>
            <Button variant="info" onClick={(e)=>createEvent(e)}>
              Add to Calendar
            </Button>
            <Button variant="secondary" onClick={returnToHome}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        </>
  )
}



export default CartContainer