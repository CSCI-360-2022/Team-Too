import React from 'react'
import { useState } from 'react'
import { Badge, Button, Container, Table, Form, Row, Col } from 'react-bootstrap'
import { eventData } from '../__mocks__/mockdata' 
import './styles.css'

function EventListContainer() {
  const [eventList, setEventList] = useState(eventData.events)
  const [filteredList, setFilteredList] = useState(eventData.events)
  const [filterBadges, setFilterBadges] = useState([])

  const filterList = (filterValue) => {
    setFilteredList(eventList.filter(event => event.eventName.includes(filterValue)))
  }

  const filterBadge = (e, filterBadge) => {
    console.log(e)
    if(e.keyCode==13){
      console.log(...filterBadge)
      setFilterBadges([...filterBadges, filterBadge])
      e.target.value = ''
    } 
  }

  const createBadge = (badgeName) => {
    return (
      <Button bg='info'>{badgeName}</Button>
    )
  }

  const removeBadge = (badgeName) => {
    let remove = filterBadges
    remove.pop(badgeName)
    setFilterBadges(remove)
  }



  return (
    <Container className="event-list-container">
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="Event Name" onChange={(e) => filterList(e.target.value)}/>
          </Col>
          <Col>
            <Form.Control placeholder="Event Tag" onKeyUp={(e) => filterBadge(e, e.target.value)} />
            {filterBadges.map((badgeName) => {
              return(<><Button className="badge-btn" value={badgeName} onClick={(e) => removeBadge(e.target.innerHTML)}><Badge bg='info'>{badgeName}</Badge></Button>{' '}</>)
            })}
          </Col>
        </Row>
      </Form>
      <Table>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Event Date</th>
            <th>Event Category</th>
            <th>Purchase</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredList.map((event) => {
              return (
                <tr value={event.eventID}>
                  <td>{event.eventName}</td>
                  <td>{event.eventDate}</td>
                  <td>
                    {
                      event.eventCategory.map((catName) => {
                        return ( <><Badge bg="info">{catName}</Badge>{' '}</>)
                      })
                    }
                  </td>
                  <td><Button color="#7B755A">Buy Ticket</Button></td>
                </tr>
              )
            })
          }
          
        </tbody>
      </Table>
    </Container>
  )
}

export default EventListContainer