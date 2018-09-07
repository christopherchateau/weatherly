import React, { Component } from "react";
import "./Search.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div class="title-wrapper">
        <h1 className="title">weatherly</h1>
        <div className="search-bar-wrapper">
          <form>
            <input
              type="text"
              className="search-field"
              spellCheck="false"
              aria-label={"search city name or zip code for weather report"}
              placeholder="search city or zip code"
              value={this.state.value}
              onChange={event => {
                this.setState({
                  value: event.target.value
                });
              }}
            />
          </form>
          <FontAwesomeIcon icon="search" />
        </div>
      </div>
    );
  }
}

export default Search;
