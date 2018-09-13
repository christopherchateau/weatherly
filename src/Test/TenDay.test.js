import React from "react";
import renderer from 'react-test-renderer';
import { shallow, mount } from "enzyme";
import TenDay from "../Components/TenDay";
import data from "../mockAPI.js";

describe("TenDay component", () => {
  let wrapper;

  // beforeEach(() => {
  //   wrapper = shallow(<TenDay />);
  //   localStorage.clear();
  // });

  it.skip("should be a thing", () => {
    expect(wrapper).toBeDefined();
  });

  let { forecast } = data;

  it('renders correctly', () => {
    const tree = renderer.create(
      <TenDay dailyForecast={ forecast } />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
