import React from "react";
import { render } from "@testing-library/react";

import HDHeader from "./HDHeader";

const data = {
  username: "huseyindol",
  fname: "huseyin",
  lname: "dol",
  birthdate: "09.12.1989",
};

describe("HDHeader", () => {
  test("render the HDHeader components", () => {
    render(<HDHeader data={data} />);
  });
});
