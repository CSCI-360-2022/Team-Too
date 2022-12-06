import React from 'react'
import Container from 'react-bootstrap/Container'
import AdminContainer from '../components/AdminContainer'

function Admin({nextEventID, changeNextEventID}) {
  return (
    <Container>
      <AdminContainer nextEventID={nextEventID} changeNextEventID={changeNextEventID} />
    </Container>
  )
}

export default Admin