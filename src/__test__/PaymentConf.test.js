import { render, screen } from "@testing-library/react";
import React from "react";
import PaymentConf from "../components/PaymentConf";

describe('PaymentConf Tests', () => {
  render(<PaymentConf />);

  test('should show PaymentConf', () => {
    expect(screen.queryByText('PaymentConf')).toBeInTheDocument
  })
  
})