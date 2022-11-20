import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import seating from '../images/Seating2.PNG'
import Ticket from './Ticket'
import './styles.css'

function EventContainer() {
  return (
    <Container>
      <Row>
        <Container>
          This is event information
        </Container>
      </Row>
      <Row>
      <Col>
          <img
            className="d-block w-100"
            src={seating}
            alt="First slide"
          />
        </Col>
        <Col className='ticket-col'>
          <Ticket />
          <Ticket />
          <Ticket />
          <Button >Check Out</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default EventContainer