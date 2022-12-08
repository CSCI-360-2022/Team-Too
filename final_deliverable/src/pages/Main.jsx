import React from 'react'
import { useNavigate } from 'react-router';
import MainCarousel from '../components/MainCarousel'
import Container from 'react-bootstrap/Container'


function Main({eventFunctions}) {
  const {selectEvent} = eventFunctions
  const navigate = useNavigate()

  const imageClick = (x) => {
    selectEvent(x)
    navigate('/event')
  }

  return (
    <Container>
      <MainCarousel imageClick={imageClick}/>
    </Container>
  )
}

export default Main