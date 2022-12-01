import React from 'react'
import EventContainer from '../components/EventContainer'
import '../components/styles.css'

function Event({selectedEvent, cartFunctions, purchasedSeats}) {
  return (
    <div className="event">
      <EventContainer selectedEvent={selectedEvent} cartFunctions={cartFunctions} purchasedSeats={purchasedSeats}/>
    </div>

  )
}

export default Event