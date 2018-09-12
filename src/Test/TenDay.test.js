import React from "react";
import { shallow, mount } from "enzyme";
import TenDay from "../Components/TenDay";

describe("TenDay component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TenDay />);
    localStorage.clear();
  });

  it.skip("should be a thing", () => {
    expect(wrapper).toBeDefined();
  });
});
