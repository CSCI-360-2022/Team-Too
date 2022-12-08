import { render, screen } from "@testing-library/react";
import React from "react";
import EventContainer from "../components/EventContainer";
import { purchasedSeatData } from '../__mocks__/mockdata'

describe('Authentication Tests', () => {
  render(<EventContainer selectedEvent={1} cartFunctions passCart={[]} purchasedSeats={purchasedSeatData.purchasedSeats} passCartSeats />);

  test('should show "Add to Cart"', () => {
    expect(screen.queryByText('Add to Cart')).toBeInTheDocument
  })

  test('should show "Mens Basketball"', () => {
    expect(screen.queryByText('Mens Basketball')).toBeInTheDocument
  })

  test('should show svg element', () => {
    expect(document.getElementsByClassName('d')).toBeInTheDocument
  })
})