import React, { Component } from "react";

class CurrentWeather extends Component {
  constructor(props) {
    super(props);
}
render() {
    console.log(this.props.location)
    return (
      <div>
        <h1>{this.props.city}, {this.props.country}</h1>
        <h3>{this.props.temperature}° F - {this.props.weather}</h3>
        <h3>Feels Like: {this.props.feelsLike}° F</h3>
        <h3>Humidity: {this.props.humidity}</h3>
        <h3>Wind: {this.props.wind}</h3>
      </div>
    );
  }
}

export default CurrentWeather;
