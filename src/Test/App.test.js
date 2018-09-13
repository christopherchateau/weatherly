import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";
import data from "../mockAPI.js";

configure({ adapter: new Adapter() });

describe("App component", () => {
  let wrapper;
  let mockProps = {
    location: ["Denver", "CO"],
    currentConditions: data.forecast.txt_forecast.forecastday["0"].fcttext,
    currentObservation: data.current_observation,
    hourlyForecast: data.hourly_forecast,
    dailyForecast: data.forecast,
    isToggleOn: true
  };
  const mockUrl = `http://api.wunderground.com/api/12345/geolookup/conditions/hourly/forecast10day/q/CO/Denver.json`;
  const mockFetch = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("should be a thing", () => {
    expect(wrapper).toBeDefined();
  });

  it.skip("should fetch data", () => {
    const initialState = wrapper.instance().state;
    const fetchAPI = mockFetch(mockUrl);
    wrapper.instance().fetchData("CO/Denver");
    const afterState = wrapper.instance().state;
    expect(mockFetch(mockUrl).toHaveBeenCalled());
  });

  it("should retrieveLastLocation if local storage is not empty", () => {
    localStorage.setItem("location", ["Golden", "CO"]);
    let location = wrapper.instance().retrieveLastLocation();
    expect(location).toEqual(["Golden", "CO"]);
  });

  it("should commit last search to local storage", () => {
    expect(localStorage).toEqual({ store: {} });
    wrapper.instance().updateLocation("Golden, CO");
    expect(localStorage).toEqual({ store: { location: '["Golden","CO"]' } });
  });

  it("should update state when updateLocation in invoked", () => {
    wrapper.instance().updateLocation("Boulder, CO");
    expect(wrapper.instance().state.location).toEqual(["Boulder", "CO"]);
  });

  it.skip("should render the search, currentWeather and SevenHour component", () => {
    wrapper = mount(<App />);
    wrapper.instance().fetchData("CO/Denver");
    wrapper.setState({ mockProps });
    expect(wrapper.find("Search").length).toEqual(1);
    expect(wrapper.find("CurrentWeather").length).toEqual(1);
    expect(wrapper.find("SevenHour").length).toEqual(1);
  });
});
