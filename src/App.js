import React, { Component } from "react";
import Search from "./Components/Search";
import CurrentWeather from "./Components/CurrentWeather";
import SevenHour from "./Components/SevenHour";
import TenDay from "./Components/TenDay";
import Welcome from "./Components/Welcome";
import data from "./mockAPI.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      city: data.current_observation.display_location.full,
      currentObservation: data.current_observation,
      hourlyForecast: data.hourly_forecast,
      dailyForecast: data.forecast
    };
  }
  getWeather = () => {
    this.setState({});
  };
  retrieveLastLocation = () => {
    return JSON.parse(localStorage.getItem("location"));
  };
  storeLastLocation = location => {
    let stringified = JSON.stringify(location);
    localStorage.setItem("location", stringified);
  };

  render() {
    return (
      <div>
        <Search />
        <CurrentWeather currentObservation={this.state.currentObservation} />
        <SevenHour hourlyForecast={this.state.hourlyForecast} />
        <TenDay dailyForecast={this.state.dailyForecast} />
        <Welcome />
      </div>
    );
  }
}

export default App;
