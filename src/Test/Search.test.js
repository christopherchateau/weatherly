import React from "react";
import { shallow, mount } from "enzyme";
import Search from "../Components/Search";
import { Trie } from "@tmcmeans/autocomplete";
import cityStateList from "../cityStateList";

describe("Search component", () => {
  let wrapper;
  let mockTrie;

  beforeEach(() => {
    wrapper = shallow(<Search />);
    localStorage.clear();
    mockTrie = new Trie();
    mockTrie.populate(cityStateList.data);
  });

  it("should be a thing", () => {
    expect(wrapper).toBeDefined();
  });

  it("trie should be populated with city list", () => {
    expect(mockTrie.wordCount).toEqual(1000)
  });

  it("", () => {
    //console.log(wrapper.instance())
  });

  it("", () => {
    let suggestions = wrapper.instance().generatedSuggestedCities('den')
                             .map( data => data.finalWord)
    
    expect(suggestions).toEqual([ 'denver, co', 'denton, tx' ]);
  });

});