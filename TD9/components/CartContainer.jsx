import React from 'react'
import { Table, Container, Dropdown, DropdownButton, Row, Col, Button } from 'react-bootstrap'
import './styles.css'

function CartContainer() {
  return (
    <Container className="cart-container">
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Ticket</th>
                <th>Ticket</th>
                <th>Date</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </DropdownButton>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </DropdownButton>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col>
          <Container>
            <Row>Account Info</Row>
            <Row>
              <Col>Coupon Code Here</Col>
              <Col><Button>Apply</Button></Col>
            </Row>
            <Row>
              <Col>Order Summary</Col>
              <Col>$100</Col>
            </Row>
            <Row>
              <Col>Taxes</Col>
              <Col>$10</Col>
            </Row>
            <Row>
              <Col>Total</Col>
              <Col>$110</Col>
            </Row>
            <Row>
              <Button>Checkout</Button>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className='cart-footer'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur corporis laboriosam molestiae dolore alias omnis maiores eaque consectetur hic doloremque odit accusantium, architecto quidem in optio? Consectetur explicabo pariatur molestias.  
      </Row>
    </Container>
  )
}

export default CartContainer