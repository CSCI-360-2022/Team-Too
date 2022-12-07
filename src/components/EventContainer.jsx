import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import seating from '../images/Seating2.PNG'
import startSeat from '../images/startSeat.svg'
import Ticket from './Ticket'
import StadiumSVG from './StadiumSVG';
import { seatData } from '../__mocks__/mockdata'
import './styles.css'
import { useState, useEffect } from 'react'
import { click } from '@testing-library/user-event/dist/click'
import { useHistory } from 'react-router'



function EventContainer({selectedEvent, cartFunctions, purchasedSeats, passCartSeats}) {
  const [seatList, setSeatList] = useState(seatData.seats)
  const [selectedSeats, setSelectedSeats] = useState([])
  const { addToCart } = cartFunctions
  const [pageCart, setPageCart] = useState([])
  const [total, setTotal] = useState(0)
  const history = useHistory()
  
  // const cartPage = (e) => {
    
  //   console.log(history.push)
  //   history.push('/cart')
  // }

  

  const addToCartPressed = (e) => {
    //passCartSeats()
    let mySeats = []
    selectedSeats.map((seat) => {
      mySeats.push({
        seatId: seat,
        price: getPrice(seat),
        eventId: selectedEvent.eventID
      })
    })
    passCartSeats(mySeats)
    console.log(mySeats)
    history.push('/cart')
    // let selectedSeat = seatList.filter(seat => seat.rowID == e)
    // console.log(seatList)
    // setPageCart([...pageCart, e])
    // addToCart(selectedSeat)
  }

  const getPrice = (rowID) => {
    var price = seatList.filter(seat => seat.rowName == rowID.substring(0,1).toUpperCase())
    return price[0].price
  }

  const selectSeat = (e) => {
    var element = document.getElementById(e.target.id)
    element.classList.toggle("selected")

    if (element.classList.contains('selected')){
      setSelectedSeats([...selectedSeats, e.target.id])
      setTotal(total + getPrice(e.target.id))
    } else {
      let index = selectedSeats.indexOf(e.target.id)
      setTotal(total - getPrice(e.target.id))
      setSelectedSeats([
        ...selectedSeats.slice(0, index),
        ...selectedSeats.slice(index + 1, selectedSeats.length)
      ])
    }
  }
  
  return (
    <Container className={'event-container'}>
      <Row>
        <Container>
          {selectedEvent?.eventName}
        </Container>
      </Row>
      <Row>
        <Col>
          <StadiumSVG purchasedSeats={purchasedSeats} selectSeat={selectSeat} />
        </Col>
        <Col className='ticket-col'>
          {
            selectedSeats.map((item) => {
              var getPrice = seatList.filter(seat => seat.rowName == item.substring(0,1).toUpperCase())
              return ( <Ticket seatID={item} seatPrice={getPrice[0].price} key={item}/>);
            })
          }
          {/*Sending tickets to cart*/}
          <Button onClick={() => addToCartPressed(selectedSeats)}>Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default EventContainer