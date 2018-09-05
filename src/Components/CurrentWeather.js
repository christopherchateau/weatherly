import React, { Component } from "react";

class CurrentWeather extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.location}
        {this.props.temperature}
        {this.props.weather}
        {this.props.city}
        {this.props.feelLike}
        {this.props.humidity}
        {this.props.wind}
      </div>
    );
  }
}

export default CurrentWeather;
