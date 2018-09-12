import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";
configure({ adapter: new Adapter() });

describe("App component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("should be a thing", () => {
    expect(wrapper).toBeDefined();
  });

  it("should return to previous city if local storage is not empty", () => {
    localStorage.setItem("location", ["Golden", "CO"]);
    let location = wrapper.instance().retrieveLastLocation();
    expect(location).toEqual(["Golden", "CO"]);
  });

  it("should return weather for Denver if local storage is empty", () => {
    expect(localStorage).toEqual({ store: {} });
    console.log(wrapper.instance());
    // expect(location).toEqual(['Golden', 'CO']);
  });
});
