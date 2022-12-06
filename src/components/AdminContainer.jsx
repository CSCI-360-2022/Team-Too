import React, {useState} from 'react'
import { createCofcEvent } from '../graphql/mutations'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { API } from 'aws-amplify'

function AdminContainer({nextEventID, changeNextEventID}) {
  const [form, setForm] = useState({})

  const myDate = Date.parse("2022-12-10-8:00")

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form)
    // await API.graphql({
    //   query: createCofcEvent,
    //   variables: {
    //     input: {
    //       eventID: 1002,
    //       eventName: "Womens Basketball",
    //       eventDate: myDate,
    //       eventCategory: ['sport','basketball','womens', 'weekend']
    //     }
    //   }
    // })
  }

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]:value
    })
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} className="mb-3" controlId="formGridPlayerID">
          <Form.Label>Event ID</Form.Label>
          <Form.Control defaultValue={nextEventID} onChange={(e) => setField('EventID', e.target.value)}/>
        </Form.Group>
        <Form.Group as={Col} className="mb-3" controlId="formGridPlayerID">
          <Form.Label>Event Name</Form.Label>
          <Form.Control onChange={(e) => setField('EventName', e.target.value)}/>
        </Form.Group>
        <Form.Group as={Col} className="mb-3" controlId="formGridPlayerID">
          <Form.Label>Date Time</Form.Label>
          <Form.Control onChange={(e) => setField('EventDate', e.target.value)}/>
        </Form.Group>    
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} className="mb-3" controlId="formGridCharName">
          <Form.Label>Categories</Form.Label>
          <Form.Control onChange={(e) => setField('EventCategories', e.target.value)}/>
        </Form.Group>
      </Row>
      <Button type={'submit'}>Submit</Button>
    </Form>
  )
}

export default AdminContainer