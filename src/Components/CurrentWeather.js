import React, { Component } from "react";
import "./CurrentWeather.css";

class CurrentWeather extends Component {
  constructor(props) {
    super(props);
}
render() {
    return (
      <div className="current-weather">
        <h1>{this.props.currentObservation.display_location.full}</h1>
        <h3>{this.props.currentObservation.temp_f}° F - {this.props.currentObservation.weather}</h3>
        <img src={this.props.icon_url}/>
        <h3>Feels Like: {this.props.currentObservation.feelslike_f}° F</h3>
        <h3>Humidity: {this.props.currentObservation.relative_humidity}</h3>
        <h3>Wind: {this.props.currentObservation.wind_string}</h3>
      </div>
    );
  }
}

export default CurrentWeather;
