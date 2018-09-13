import React from "react";
import { shallow, mount } from "enzyme";
import SuggestedCities from "../Components/SuggestedCities";

describe("SuggestedCities component", () => {
  let wrapper;
  let suggestedCities = {
    children: {},
    endOfWord: true,
    finalWord: "denver, co",
    selectedCount: 0,
    value: "o"
  };
  let handleSuggestionClick = () => {};

  beforeEach(() => {
    wrapper = shallow(
      <SuggestedCities
        suggestedCities={suggestedCities}
        handleSuggestionClick={handleSuggestionClick}
      />
    );
  });

  it.skip("should call handleSuggestionClick when suggestion is clicked", () => {
    wrapper.instance().handleSuggestionClick = jest.fn();

    suggestedCities.simulate("click");

    expect(wrapper.instance().handleSuggestionClick).toHaveBeenCalled();
    expect(wrapper.instance().handleSuggestionClick).toHaveBeenCalledTimes(1);
  });
});
