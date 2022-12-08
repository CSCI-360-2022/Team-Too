import React from 'react'
import DatePicker from "react-datepicker";
import { useState, useEffect } from 'react'
import { Badge, Button, Container, Table, Form, Row, Col } from 'react-bootstrap'
import { eventData } from '../__mocks__/mockdata' 
import './styles.css'
import "react-datepicker/dist/react-datepicker.css";
import ApiCalendar from 'react-google-calendar-api';

function EventListContainer({eventList, eventFunctions, eventPage}) {
  const [showEventList, setEventList] = useState(eventList)
  const [filteredList, setFilteredList] = useState(eventList)
  const [filterBadges, setFilterBadges] = useState([])
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date('02/01/23'));

  const { selectEvent } = eventFunctions

  const filterList = (filterValue) => {
    setFilteredList(eventList.filter(event => event.eventName.includes(filterValue)))
  }

  const filterBadge = (e, filterBadge) => {
    if(e.keyCode==13){
      setFilterBadges([...filterBadges, filterBadge])
      e.target.value = ''
    } 
  }

  const startDatePicked = (date) => {
    setStartDate(date)
    setFilteredList(showEventList.filter(event => new Date(event.eventDate) > date))
  }

  const endDatePicked = (date) => {
    setEndDate(date)
    //setFilteredList(showEventList.filter(event => new Date(event.eventDate) < date))
  }

  const removeBadge = (badgeName) => {
    let remove = filterBadges
    remove.pop(badgeName)
    setFilterBadges(remove)
  }

  const dateChanger = (e) => {
    let newDate = new Date(e)
    let month = newDate.getMonth() + 1
    let day = newDate.getDate()
    let year = newDate.getFullYear()
    return(month + '/' + day + '/' + year)
  }

  const timeChanger = (e) => {
    let newDate = new Date(e)
    let hour = newDate.getHours() > 12 ? newDate.getHours() - 12 : newDate.getHours()
    let ampm = newDate.getHours() >= 12 ? 'pm' : 'am'
    return(hour + ampm)
  }

  useEffect(() => {
    let thisArray = filteredList
    thisArray.sort()
  })

  return (
    <Container>
      <Form className="filter-form">
        <Row className="filter-form-row">
          <Col>
            Start Date: <DatePicker selected={startDate} onChange={(date) => startDatePicked(date)} />
          </Col>
          <Col>
            End Date: <DatePicker selected={endDate} onChange={(date) => endDatePicked(date)} />
          </Col>
        </Row>
        <Row className="filter-form-row">
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
      <Container className="event-list-container">

        <Table>
        <thead>
            <tr key={'header'}>
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
                  (new Date(event.eventDate) < endDate || new Date(Event.eventDate) > startDate) &&
                  <tr key={event.eventID} value={event.eventID}>
                    <td>{event.eventName}</td>
                    <td><div className="datetime">{dateChanger(event.eventDate)}</div>{timeChanger(event.eventDate)}</td>
                    <td>
                      <div className={'category-div'}>
                        {
                          event.eventCategory.map((catName, i) => {
                            return ( <Badge key={i} className={`badge badge-${i}`} bg="info">{catName}</Badge>)
                          })
                        }                   
                      </div>
                    </td>
                    <td><Button value={event.eventID} color="#7B755A" onClick={(e) => eventPage(e.target.value)} >Buy Tickets</Button></td>
                  </tr>
                )
              })
            }
            
          </tbody>
        </Table>
      </Container>
    </Container>
  )
}

export default EventListContainer