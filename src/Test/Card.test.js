import React from "react";
import renderer from 'react-test-renderer';
import { shallow, mount } from "enzyme";
import Card from "../Components/Card";
import data from "../mockAPI.js";

describe("Card component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />);
    localStorage.clear();
  });

  it("should be a thing", () => {
    expect(wrapper).toBeDefined();
  });

  // it('should take in data for rendering cards', () => {
  //   const dataSet = Object.keys(data);
  //   console.log(dataSet)
  //   expect(dataSet).toEqual([ 'response', 'current_observation', 'forecast', 'hourly_forecast' ]);
  // });
  // const data = data.hourly_forecast

  it('renders correctly', () => {
    const tree = renderer.create(
      <Card  {...data} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
