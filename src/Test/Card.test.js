import React from "react";
import { shallow, mount } from "enzyme";
import Card from "../Components/Card";

describe("Card component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />);
    localStorage.clear();
  });

  it.skip("should be a thing", () => {
    expect(wrapper).toBeDefined();
  });

});