import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import seating from '../images/Seating2.PNG'
import startSeat from '../images/startSeat.svg'
import Ticket from './Ticket'
import { seatData } from '../__mocks__/mockdata'
import './styles.css'
import { useState } from 'react'
import { click } from '@testing-library/user-event/dist/click'

function EventContainer({selectedEvent, cartFunctions}) {
  const [seatList, setSeatList] = useState(seatData.seats)
  const { addToCart } = cartFunctions
  const [pageCart, setPageCart] = useState([{}])

  const addToCartPressed = (e) => {
    let selectedSeat = seatList.filter(seat => seat.rowID == e)
    setPageCart([...pageCart, e])
    addToCart(selectedSeat)
  }

  const clickState = (e) => {
    console.log(e)
    var element = document.getElementById(e.target.id)
   //var colorElement = element.style.backgroundColor
    element.classList.toggle("selected")

    
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
      <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225.58 223.5">
        <defs>
        </defs>
        <rect class="cls-1" id="seat1" x=".5" y=".5" width="103.97" height="103.97"  onClick={(e) => clickState(e)}/>
        <rect class="cls-1" id="seat2"x="121.11" y=".5" width="103.97" height="103.97" onClick={(e) => clickState(e)}/>
        <rect class="cls-1" id="seat3" x=".5" y="119.03" width="103.97" height="103.97" onClick={(e) => clickState(e)}/>
        <rect class="cls-1" id="seat4" x="121.11" y="119.03" width="103.97" height="103.97" onClick={(e) => clickState(e)}/>
      </svg>
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