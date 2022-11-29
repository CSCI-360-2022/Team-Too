import React from 'react'
import EventContainer from '../components/EventContainer'
import '../components/styles.css'

function Event({selectedEvent, cartFunctions}) {
  return (
    <div className="event">
      <EventContainer selectedEvent={selectedEvent} cartFunctions={cartFunctions} />
    </div>

  )
}

export default Event