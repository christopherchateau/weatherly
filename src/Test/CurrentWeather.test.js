import React from "react";
import { shallow, mount } from "enzyme";
import CurrentWeather from "../Components/CurrentWeather";

describe("CurrentWeather component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CurrentWeather />);
    localStorage.clear();
  });

  it.skip("should be a thing", () => {
    expect(wrapper).toBeDefined();
  });

});