import { render, screen } from "@testing-library/react";
import React from "react";
import MainCarousel from "../components/MainCarousel";

describe('Authentication Tests', () => {
  render(<MainCarousel />);

  test('should show "First Slide Label"', () => {
    expect(screen.getByText('First slide label')).toBeInTheDocument
  })
  
})