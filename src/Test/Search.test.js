import React from "react";
import { shallow, mount } from "enzyme";
import Search from "../Components/Search";

describe("Search component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />);
    localStorage.clear();
  });

  it.skip("should be a thing", () => {
    expect(wrapper).toBeDefined();
  });

});