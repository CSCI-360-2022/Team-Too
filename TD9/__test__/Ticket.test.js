import { render, screen } from "@testing-library/react";
import React from "react";
import Ticket from "../components/Ticket";

describe('Ticket Tests', () => {
  render(<Ticket />);

  test('should show ticket', () => {
    expect(screen.queryByText('Ticket')).toBeInTheDocument
  })
  
})