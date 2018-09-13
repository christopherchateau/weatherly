import React from "react";
import renderer from 'react-test-renderer';
import { shallow, mount } from "enzyme";
import Card from "../Components/Card";
import data from "../mockAPI.js";


describe("Card component", () => {
  let weekday = data.current_observation
  console.log(weekday)
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Card />);
    localStorage.clear();
  });

  it.skip("should be a thing", () => {
    console.log(wrapper)
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
