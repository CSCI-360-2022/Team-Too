import React from 'react'
import DatePicker from "react-datepicker";
import { useState } from 'react'
import { Badge, Button, Container, Table, Form, Row, Col } from 'react-bootstrap'
import { eventData } from '../__mocks__/mockdata' 
import { useHistory } from 'react-router'
import './styles.css'
import "react-datepicker/dist/react-datepicker.css";

// AIzaSyA-bvcu_3Gry9jj-MUb0EwQttFI-KKkVrQ

// 304264845667-ov5f0950gg7tt9dj0k3vtcb3avpf4sa2.apps.googleusercontent.com
// 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

function EventListContainer(props) {
  const [eventList, setEventList] = useState(eventData.events)
  const [filteredList, setFilteredList] = useState(eventData.events)
  const [filterBadges, setFilterBadges] = useState([])
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const history = useHistory()

const apiCalendar = new ApiCalendar(config)
console.log(apiCalendar)

  const { selectEvent } = props.eventFunctions

  const filterList = (filterValue) => {
    setFilteredList(eventList.filter(event => event.eventName.includes(filterValue)))
  }

  const filterBadge = (e, filterBadge) => {
    console.log(e)
    if(e.keyCode==13){
      setFilterBadges([...filterBadges, filterBadge])
      e.target.value = ''
    } 
  }

  const startDatePicked = (date) => {
    setStartDate(date)
    setFilteredList(eventList.filter(event => new Date(event.eventDate) > date))
  }

  const endDatePicked = (date) => {
    setEndDate(date)
    setFilteredList(eventList.filter(event => new Date(event.eventDate) < date))
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

  const eventPage = (e) => {
    selectEvent(e)
    history.push('/event')
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
        <Row>
          <DatePicker selected={startDate} onChange={(date) => startDatePicked(date)} />
          <DatePicker selected={endDate} onChange={(date) => endDatePicked(date)} />
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
              console.log(event)
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
                  <td><Button value={event.eventID} color="#7B755A" onClick={(e) => eventPage(e.target.value)} >Buy Ticket</Button></td>
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