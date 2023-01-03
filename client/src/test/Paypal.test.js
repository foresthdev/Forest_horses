import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Paypal from "../components/Paypal";

test("render content", () => {
  const Paypal = {
    content: "This is a test",
  };
  const component = render(<Paypal Paypal={Paypal} />);

  console.log(component)
});
