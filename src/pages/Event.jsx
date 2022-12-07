import React from 'react'
import EventContainer from '../components/EventContainer'
import '../components/styles.css'

function Event({selectedEvent, cartFunctions, purchasedSeats, passCartSeats}) {
  return (
    <div className="event">
      <EventContainer selectedEvent={selectedEvent} cartFunctions={cartFunctions} purchasedSeats={purchasedSeats} passCartSeats={passCartSeats}/>
    </div>

  )
}

export default Event