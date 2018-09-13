import React from "react";
import { shallow, mount } from "enzyme";
import Search from "../Components/Search";

describe("Search component", () => {
  let wrapper;
  let updateLocation = 'Denver, CO';
  let fetchDataZipCode = 80220; 

  beforeEach(() => {
    wrapper = shallow(<Search updateLocation={updateLocation} fetchDataZipCode={fetchDataZipCode}/>);
    localStorage.clear();
  });

  it("should be a thing", () => {
    expect(wrapper).toBeDefined();
  });

});
