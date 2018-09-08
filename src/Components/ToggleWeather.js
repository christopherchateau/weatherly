import React, { Component } from "react";
import "./ToggleWeather.css";

class ToggleWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'HOURLY' : 'WEEKLY'}
      </button>
    );
  }
}

export default ToggleWeather;