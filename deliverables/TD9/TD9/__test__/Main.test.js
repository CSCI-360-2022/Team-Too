import { render, screen } from "@testing-library/react";
import React from "react";
import Main from "../components/Main";

describe('Main Tests', () => {
  render(<Main />);

  test('should show main', () => {
    expect(screen.queryByText('Main')).toBeInTheDocument
  })
  
})