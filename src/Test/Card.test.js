import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";
import Card from "../Components/Card";
import data from "../mockAPI.js";

describe("Card component", () => {
  let wrapperSevenHour;
  let wrapperTenDay;

  let mockDataHourly = {
    hour: "1 am",
    temperature: "80",
    conditions: "Clear",
    chanceOfRain: 25
  };

  let mockDataDaily = {
    day: "Monday",
    temperature: 80,
    high: 85,
    low: 70,
    conditions: "Clear"
  };

  beforeEach(() => {
    wrapper = mount(<Card hourlyForecast={hourlyForecast} />);
  });

  it("should be a thing", () => {
    expect(wrapper).toBeDefined();
  });

  // it('renders correctly', () => {
  //   const tree = renderer.create(
  //     <Card  {...data} />
  //   ).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
