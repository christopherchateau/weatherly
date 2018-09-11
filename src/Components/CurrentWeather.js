import React, { Component } from "react";
import "./CurrentWeather.css";

class CurrentWeather extends Component {
  constructor() {
    super();
}
render() {
  let wind = this.props.currentObservation.wind_string;
  wind = wind
          .split(' ')
          .map( str => str.match(/[\d.]/) ? parseInt(str).toFixed(0): str)
          .join(' ');
             
    return (
      <div className="current-weather">
        <h1 className="city-name">{this.props.currentObservation.display_location.full}</h1>
        <h3 className="temperature">{Math.round(this.props.currentObservation.temp_f)}°</h3>
        <h3>Conditions: {this.props.currentObservation.weather}</h3>
        <h3>Feels Like: {Math.round(this.props.currentObservation.feelslike_f)}° F</h3>
        <h3>Humidity: {this.props.currentObservation.relative_humidity}</h3>
        <h3>Wind: {wind}</h3>
      </div>
    );
  }
}

export default CurrentWeather;