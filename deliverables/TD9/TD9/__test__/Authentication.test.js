import { render, screen } from "@testing-library/react";
import React from "react";
import Authentication from "../components/Authentication";

describe('Authentication Tests', () => {
  render(<Authentication />);

  test('should show authentication', () => {
    expect(screen.queryByText('Authentication')).toBeInTheDocument
  })
  
})