import React from "react";
import { mount } from "enzyme";
import Card from "../Components/Card";

describe("Card component", () => {
  let wrapperSevenHour;
  let wrapperDaily;

  let mockDataHourly = {
    icon: "clear",
    hour: "1 am",
    temperature: "80",
    conditions: "Clear",
    chanceOfRain: 25
  };

  let mockDataDaily = {
    icon: "clear",
    day: "Monday",
    high: 85,
    low: 70,
    conditions: "Clear"
  };

  it("should create daily forecast cards", () => {
    wrapperDaily = mount(
      <Card
        icon={mockDataDaily.icon}
        weekDay={mockDataDaily.day}
        highTemp={mockDataDaily.high}
        lowTemp={mockDataDaily.low}
        conditions={mockDataDaily.conditions}
      />
    );
    expect(wrapperDaily).toBeDefined;
    expect(wrapperDaily.find("p")).toHaveLength(1);
    expect(wrapperDaily.find("h1")).toHaveLength(1);
    expect(wrapperDaily.find("h3")).toHaveLength(2);
    expect(wrapperDaily.find("div")).toHaveLength(1);
  });

  it("should create hourly forecast cards", () => {
    wrapperSevenHour = mount(
      <Card
        icon={mockDataHourly.icon}
        hour={mockDataHourly.hour}
        temp={mockDataHourly.temperature}
        condition={mockDataHourly.conditions}
        chanceOfRain={mockDataHourly.chanceOfRain}
      />
    );
    expect(wrapperSevenHour).toBeDefined;
    expect(wrapperSevenHour.find("p")).toHaveLength(2);
    expect(wrapperSevenHour.find("h1")).toHaveLength(2);
    expect(wrapperSevenHour.find("div")).toHaveLength(1);
  });
});
