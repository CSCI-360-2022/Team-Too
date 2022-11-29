import React from 'react'
import EventContainer from '../components/EventContainer'
import '../components/styles.css'

function Event(props) {
  return (
    <div className="event">
      <EventContainer selectedEvent={props.selectedEvent} />
    </div>

  )
}

export default Event