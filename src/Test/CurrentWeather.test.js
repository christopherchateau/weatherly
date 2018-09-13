import React from "react";
import { shallow, mount } from "enzyme";
import CurrentWeather from "../Components/CurrentWeather";

describe("CurrentWeather component", () => {
  let wrapper;
  let mockObservation = {
    display_location: { full: "Denver" },
    temp_f: 76,
    wind_string: "Super awesome wind",
    feellike_f: 76,
    relative_humidity: 20
  };

  it("should be a thing", () => {
    wrapper = mount(
      <CurrentWeather
        currentObservation={mockObservation}
        currentConditions={"Super awesome weather"}
      />
    );
    expect(wrapper).toBeDefined;
    expect(wrapper.find("h1")).toHaveLength(1);
    expect(wrapper.find("h3")).toHaveLength(6);
    expect(wrapper.find("div")).toHaveLength(1);
  });
});
