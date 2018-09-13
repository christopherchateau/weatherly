import React from "react";
import { shallow, mount } from "enzyme";
import Card from "../Components/Card";
import data from '../mockAPI.js'

describe("Card component", () => {
  let weekday = data.current_observation
  console.log(weekday)
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Card />);
    localStorage.clear();
  });
  
  it.skip("should be a thing", () => {
    console.log(wrapper)
    expect(wrapper).toBeDefined();
  });

});