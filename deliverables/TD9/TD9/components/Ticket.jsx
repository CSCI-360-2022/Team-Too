import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './styles.css'

function Ticket(props) {

  return (
    <Container className='ticket-container'>
      <Row className='ticket-row'>
        <Col className='info-col'>
          <Row className='info-row'>Section</Row>
          <Row className='info-row info-result'>B</Row>
        </Col>
        <Col className='info-col'>
          <Row className='info-row'>Row</Row>
          <Row className='info-row info-result'>3</Row>
        </Col>
        <Col className='info-col'>
          <Row className='info-row'>Seat</Row>
          <Row className='info-row info-result'>11</Row>
        </Col>
        <Col className='info-col info-price'>
          $100.00
        </Col>
      </Row>
    </Container>
  )
}

export default Ticket

