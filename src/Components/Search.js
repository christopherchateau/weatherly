import React, { Component } from "react";
import "./Search.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import cityStateList from "../cityStateList";
import { Trie } from "@tmcmeans/autocomplete";
import SuggestedCities from "./SuggestedCities";

library.add(faSearch);

let autoComplete = new Trie();

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      suggestedCities: []
    };
    this.handleSuggestionClick = this.handleSuggestionClick.bind(this);
  }

  setUpTrie() {
    autoComplete.populate(cityStateList.data);
  }

  componentDidMount() {
    this.setUpTrie();
  }

  handleInputChange(event) {
    const value = event.target.value;
    const suggestedCities = this.generatedSuggestedCities(value);
    this.setState({
      value,
      suggestedCities
    });
  }

  generatedSuggestedCities(value) {
    return autoComplete.suggest(value);
  }

  handleSearch(event) {
    event.preventDefault();
    let input = this.state.value;
    autoComplete.select(input); //pull into separate function
    this.props.fetchDataZipCode(input);
  }

  handleSuggestionClick(value) {
    //console.log(this.state.value)
  }

  render() {
    return (
      <div className="title-wrapper">
        <h1 className="title">weathrly</h1>
        <div className="search-bar-wrapper">
          <form>
            <input
              type="text"
              className="search-field"
              spellCheck="false"
              aria-label="search city name or zip code for weather report"
              placeholder="search city or zip code"
              value={this.state.value}
              onChange={e => this.handleInputChange(e)}
            />
            <SuggestedCities
              suggestedCities={this.state.suggestedCities}
              handleSuggestionClick={this.handleSuggestionClick}
            />
            <button
              className="submit-button"
              onClick={e => this.handleSearch(e)}
            >
              <FontAwesomeIcon icon="search" />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
