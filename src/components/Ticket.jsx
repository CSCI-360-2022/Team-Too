import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './styles.css'

function Ticket({seatID, seatPrice}) {

  return (
    <Container className='ticket-container'>
      <Row className='ticket-row' key={seatID}>
        <Col className='info-col'>
          <Row className='info-row'>Seat</Row>
          <Row className='info-row info-result'>{seatID.toUpperCase()}</Row>
        </Col>
        <Col className='info-col info-price'>
          <Row className='info-price'>Seat Price</Row>
          <Row className='info-price info-result'>${seatPrice}</Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Ticket

