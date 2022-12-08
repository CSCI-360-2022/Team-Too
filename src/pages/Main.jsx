import React, { useState } from 'react'
import MainCarousel from '../components/MainCarousel'
import Container from 'react-bootstrap/Container'


function Main({eventFunctions}) {

  return (
    <Container>
      <MainCarousel eventFunctions={eventFunctions}/>
    </Container>
  )
}

export default Main