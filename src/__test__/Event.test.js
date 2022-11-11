import { render, screen } from "@testing-library/react";
import React from "react";
import Event from "../components/Event";

describe('Event Tests', () => {
  render(<Event />);

  test('should show Event', () => {
    expect(screen.queryByText('Event')).toBeInTheDocument
  })
  
})