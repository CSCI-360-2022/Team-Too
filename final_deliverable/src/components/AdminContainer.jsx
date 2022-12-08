import React, {useState} from 'react'
import { createCofcEvent, createPurchasedSeat } from '../graphql/mutations'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { API } from 'aws-amplify'
import DateTime from 'react-datetime'
import "react-datetime/css/react-datetime.css";
import { eventData, purchasedSeatData } from '../__mocks__/mockdata'

function AdminContainer() {
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.graphql({
      query: createCofcEvent,
      variables: {
        input: {
          eventID: form.EventID,
          eventName: form.EventName,
          eventDate: form.eventDate,
          eventCategory: form.eventCategory
        }
      }
    })
  }

  const massUpload = () => {
    eventData.events.map((e) => {
      API.graphql({
        query: createCofcEvent,
        variables: {
          input: {
            eventID: e.eventID,
            eventName: e.eventName,
            eventDate: e.eventDate,
            eventCategory: e.eventCategory
          }
        }
      })
    })
  }

  const massUpload2 = () => {
    purchasedSeatData.purchasedSeats.map((s) => {
      API.graphql({
        query: createPurchasedSeat,
        variables: {
          input: {
            seatID: s.seatID,
            eventID: s.eventID,
          }
        }
      })
    })
  }


  const setField = (field, value) => {
    setForm({
      ...form,
      [field]:value
    })
  }

  const setCatField = (value) => {
    setField('eventCategory',value.split(','))
  }

  const setDateTimeField = (dateTime) => {
    let thisDate = new Date(dateTime._d)
    setField('eventDate',thisDate.toISOString())
  }

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} className="mb-3" controlId="formGridPlayerID">
          <Form.Label>Event ID</Form.Label>
          <Form.Control onChange={(e) => setField('eventID', e.target.value)}/>
        </Form.Group>
        <Form.Group as={Col} className="mb-3" controlId="formGridPlayerID">
          <Form.Label>Event Name</Form.Label>
          <Form.Control onChange={(e) => setField('eventName', e.target.value)}/>
        </Form.Group>
        <Form.Group as={Col} className="mb-3" controlId="formGridPlayerID">
          <Form.Label>Date Time</Form.Label>
          <DateTime onChange={(e) => setDateTimeField(e)}/>
        </Form.Group>    
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} className="mb-3" controlId="formGridCharName">
          <Form.Label>Categories</Form.Label>
          <Form.Control onChange={(e) => setCatField(e.target.value)}/>
        </Form.Group>
      </Row>
      <Button type={'submit'}>Submit</Button>
    </Form>
    <Button onClick={() => massUpload()}>Mass Upload</Button>
    </>
  )
}

export default AdminContainer