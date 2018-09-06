import React, { Component } from "react";

class CurrentWeather extends Component {
  constructor(props) {
    super(props);
}
render() {
    return (
      <div>
        <h1>{this.props.currentObservation.display_location.full}</h1>
        <h3>{this.props.currentObservation.temp_f}° F - {this.props.currentObservation.weather}</h3>
        <h3>ADD IMG</h3>
        <h3>Feels Like: {this.props.currentObservation.feelslike_f}° F</h3>
        <h3>Humidity: {this.props.currentObservation.relative_humidity}</h3>
        <h3>Wind: {this.props.currentObservation.wind_string}</h3>
        <h3>ADD RAIN</h3>
      </div>
    );
  }
}

export default CurrentWeather;
