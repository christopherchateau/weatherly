import React from "react";
import renderer from 'react-test-renderer';
import { shallow, mount } from "enzyme";
import SevenHour from "../Components/SevenHour";
import data from "../mockAPI.js";

describe("SevenHour component", () => {
  let wrapper;

  // beforeEach(() => {
  //   wrapper = shallow(<SevenHour />);
  //   localStorage.clear();
  // });

  it.skip("should be a thing", () => {
    expect(wrapper).toBeDefined();
  });

  let { hourly_forecast } = data

  it('renders correctly', () => {
  const tree = renderer.create(
    <SevenHour hourlyForecast={ hourly_forecast }/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
  });

});

