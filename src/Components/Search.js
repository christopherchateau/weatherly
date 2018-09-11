import React, { Component } from "react";
import "./Search.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import cityStateList from "../cityStateList";
import Trie from '@tmcmeans/autocomplete'

library.add(faSearch);


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
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
              onChange={event => {
                this.setState({
                  value: event.target.value
                });
              }}
            />
            <button
              className="submit-button"
              onClick={event => {
                event.preventDefault();
                let input = this.state.value;

                input.match(/^\d+$/)
                  ? this.props.fetchDataZipCode(input)
                  : this.props.fetchDataZipCode(input);
              }}
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
//module exports trie