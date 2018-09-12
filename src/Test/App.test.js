import React from "react";
import ReactDOM from 'react-dom'
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";

configure({ adapter: new Adapter() });

describe("App component", () => {
  let wrapper;
  let props
  const mockUrl = `http://api.wunderground.com/api/12345/geolookup/conditions/hourly/forecast10day/q/CO/Denver.json`
  const mockFetch = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<App {...props}/>);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("should be a thing", () => {
    expect(wrapper).toBeDefined();
  });

  it.skip("should fetch data", () => {
    const initialState = wrapper.instance().state
    const fetchAPI = mockFetch(mockUrl);
    wrapper.instance().fetchData('CO/Denver')
    const afterState = wrapper.instance().state
    //console.log(fetchData('CO/Denver'))
    console.log(afterState)
    expect(mockFetch(mockUrl).toHaveBeenCalled());
  });

  it("should retrieveLastLocation if local storage is not empty", () => {
    localStorage.setItem("location", ["Golden", "CO"]);
    let location = wrapper.instance().retrieveLastLocation();
    expect(location).toEqual(["Golden", "CO"]);
  });

  it("should return weather for Denver if local storage is empty", () => {
    expect(localStorage).toEqual({ store: {} });
    wrapper.instance().fetchData("autoip")
    console.log(wrapper.instance());
    // expect(location).toEqual(['Golden', 'CO']);
  });
});

