import React from "react";
import { shallow, mount } from "enzyme";
import Search from "../Components/Search";
import { Trie } from "@tmcmeans/autocomplete";
import cityStateList from "../cityStateList";

describe("Search component", () => {
  let wrapper;
  let updateLocation = "Denver, CO";
  let fetchDataZipCode = 80220;
  let mockTrie;

  beforeEach(() => {
    wrapper = shallow(
      <Search
        updateLocation={updateLocation}
        fetchDataZipCode={fetchDataZipCode}
      />
    );
    localStorage.clear();
    mockTrie = new Trie();
    mockTrie.populate(cityStateList.data);
  });

  it("should be a thing", () => {
    expect(wrapper).toBeDefined();
  });

  it("trie should be populated with city list", () => {
    expect(mockTrie.wordCount).toEqual(1000);
  });

  it("should generate suggestions with text entry", () => {
    let suggestions = wrapper
      .instance()
      .generatedSuggestedCities("den")
      .map(data => data.finalWord);

    expect(suggestions).toEqual(["denver, co", "denton, tx"]);
  });

  it("should render", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
    expect(wrapper.find("form")).toHaveLength(1);
    expect(wrapper.find("div")).toHaveLength(2);
    expect(wrapper.find("input")).toHaveLength(1);
    expect(wrapper.find("button")).toHaveLength(1);
  });
});
