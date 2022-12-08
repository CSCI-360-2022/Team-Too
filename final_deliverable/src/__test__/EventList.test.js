import { render, screen } from "@testing-library/react";
import React from "react";
import EventListContainer from "../components/EventListContainer";
import { eventData } from '../__mocks__/mockdata'

describe('Authentication Tests', () => {
  render(<EventListContainer eventList={eventData.events} eventFunctions/>);

  test('should show "Event Name"', () => {
    expect(screen.getByText('Event Name')).toBeInTheDocument
  })

  test('should show "Mens Basketball"', () => {
    expect(screen.queryByText('Mens Basketball')).toBeInTheDocument
  })
  
})