import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";
import TenDay from "../Components/TenDay";
import data from "../mockAPI.js";

describe("TenDay component", () => {
  let forecastday = data.forecast.simpleforecast.forecastday[0];

  it("renders correctly", () => {
    // const tree = renderer.create(<TenDay dailyForecast={forecast} />).toJSON();
    // expect(tree).toMatchSnapshot();
  });
});
