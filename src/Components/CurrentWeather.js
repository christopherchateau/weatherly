import React, { Component } from "react";
import "./CurrentWeather.css";

class CurrentWeather extends Component {
  render() {
    let {
      display_location,
      temp_f,
      wind_string,
      weather,
      feelslike_f,
      relative_humidity
    } = this.props.currentObservation;
    let wind = wind_string
      .split(" ")
      .map(str => (str.match(/[\d.]/) ? parseInt(str).toFixed(0) : str))
      .join(" ");

    return (
      <div className="current-weather">
        <h1 className="city-name">{display_location.full}</h1>
        <h3 className="temperature">{Math.round(temp_f)}°</h3>
        <h3>{this.props.currentConditions} </h3>
        <br />
        <h3>Conditions: {weather}</h3>
        <h3>Feels Like: {Math.round(feelslike_f)}° F</h3>
        <h3>Humidity: {relative_humidity}</h3>
        <h3>Wind: {wind}</h3>
      </div>
    );
  }
}

export default CurrentWeather;
