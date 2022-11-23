import React from 'react'
import EventListContainer from '../components/EventListContainer'
import Amplify, { API } from 'aws-amplify'
import '../components/styles.css'

const myAPI = "apic5c75167"
const path = '/customers';

function EventList() {
  return (
    <div className="event-list">
      <EventListContainer />
    </div>
  )
}

export default EventList