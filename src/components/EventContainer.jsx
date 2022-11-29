import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import seating from '../images/Seating2.PNG'
import Ticket from './Ticket'
import { seatData } from '../__mocks__/mockdata'
import './styles.css'
import { useState } from 'react'

function EventContainer({selectedEvent, cartFunctions}) {
  const [seatList, setSeatList] = useState(seatData.seats)
  const { addToCart } = cartFunctions
  const [pageCart, setPageCart] = useState([{}])

  const addToCartPressed = (e) => {
    let selectedSeat = seatList.filter(seat => seat.rowID == e)
    setPageCart([...pageCart, e])
    addToCart(selectedSeat)
  }

  return (
    <Container>
      <Row>
        <Container>
          {selectedEvent?.eventName}
        </Container>
      </Row>
      <Row>
      <Col>
          <img
            className="d-block w-100"
            src={seating}
            alt="First slide"
          />
          {
            seatList.map((seat) => {
              return (
                <Button value={seat.rowID} onClick={(e) => addToCartPressed(e.target.value)}>{seat.price}</Button>
              )
            })
          }
        </Col>
        <Col className='ticket-col'>
          {
            pageCart.map((item) => {
              console.log(item.price)
              return ( <Ticket />);
            })
          }
          <Button >Check Out</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default EventContainer