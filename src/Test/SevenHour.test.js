import React from "react";
import { shallow, mount } from "enzyme";
import SevenHour from "../Components/SevenHour";

describe("SevenHour component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SevenHour />);
    localStorage.clear();
  });

  it.skip("should be a thing", () => {
    expect(wrapper).toBeDefined();
  });

});