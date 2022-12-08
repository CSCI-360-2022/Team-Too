import React from 'react'
import EventListContainer from '../components/EventListContainer'
import { useNavigate } from 'react-router'
import Amplify, { API } from 'aws-amplify'
import '../components/styles.css'

function EventList({eventList, eventFunctions}) {
  const navigate = useNavigate()
  const {selectEvent} = eventFunctions

  const eventPage = (e) => {
    selectEvent(e)
    navigate('/event')
  }

  return (
    <div className="event-list">
      <EventListContainer eventList={eventList} eventFunctions={eventFunctions} eventPage={eventPage} />
    </div>
  )
}

export default EventList