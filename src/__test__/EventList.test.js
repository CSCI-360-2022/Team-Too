import { render, screen } from "@testing-library/react";
import React from "react";
import EventList from "../components/EventList";

describe('EventList Tests', () => {
  render(<EventList />);

  test('should show EventList', () => {
    expect(screen.queryByText('EventList')).toBeInTheDocument
  })
  
})