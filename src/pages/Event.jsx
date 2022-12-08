import React from 'react'
import EventContainer from '../components/EventContainer'
import { useNavigate } from 'react-router'
import '../components/styles.css'

function Event({selectedEvent, cartFunctions, purchasedSeats, passCartSeats, passCart}) {
  const navigate = useNavigate()

  const navCart = () => {
    navigate('/cart')
  }

  return (
    <div className="event">
      <EventContainer selectedEvent={selectedEvent} cartFunctions={cartFunctions} passCart={passCart} purchasedSeats={purchasedSeats} passCartSeats={passCartSeats} navCart={navCart}/>
    </div>

  )
}

export default Event