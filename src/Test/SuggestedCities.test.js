import React from "react";
import { shallow, mount } from "enzyme";
import SevenHour from "../Components/SuggestedCities";

describe("SuggestedCities component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SuggestedCities />);
    localStorage.clear();
  });

  it.skip("should be a thing", () => {
    expect(wrapper).toBeDefined();
  });
});
