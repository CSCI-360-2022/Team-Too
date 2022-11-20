import { render, screen } from "@testing-library/react";
import React from "react";
import User from "../components/User";

describe('User Tests', () => {
  render(<User />);

  test('should show user', () => {
    expect(screen.queryByText('User')).toBeInTheDocument
  })

})