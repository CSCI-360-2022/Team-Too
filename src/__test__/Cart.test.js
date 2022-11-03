import { render, screen } from "@testing-library/react";
import React from "react";
import Cart from "../components/Cart";

describe('Cart Tests', () => {
  render(<Cart />);

  test('should show Cart', () => {
    expect(screen.queryByText('Cart')).toBeInTheDocument
  })
  
})