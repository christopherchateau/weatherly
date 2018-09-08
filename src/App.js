import React, { Component } from "react";

import Search from "./Components/Search";
import CurrentWeather from "./Components/CurrentWeather";
import SevenHour from "./Components/SevenHour";
import TenDay from "./Components/TenDay";
import Welcome from "./Components/Welcome";
import data from "./mockAPI.js";
// import ToggleWeather from './Components/ToggleWeather'
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      city: data.current_observation.display_location.full,
      currentObservation: data.current_observation,
      hourlyForecast: data.hourly_forecast,
      dailyForecast: data.forecast,
      isToggleOn: true 
    };
    this.handleClick = this.handleClick.bind(this);
  }

  getWeather = () => {
    this.setState({
      
    });
  };

   handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }

  retrieveLastLocation = () => {
    return JSON.parse(localStorage.getItem("location"));
  };
  storeLastLocation = location => {
    let stringified = JSON.stringify(location);
    localStorage.setItem("location", stringified);
  };

  render() {
    if (this.state.isToggleOn) {
      return (
        <div>
          <Search />
          <CurrentWeather currentObservation={this.state.currentObservation} />
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'HOURLY' : 'WEEKLY'}
          </button>
          <SevenHour hourlyForecast={this.state.hourlyForecast} />
          <Welcome />
        </div>
      );
    } else {
      return (
        <div>
          <Search />
          <CurrentWeather currentObservation={this.state.currentObservation} />
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'HOURLY' : 'WEEKLY'}
          </button>
          <TenDay dailyForecast={this.state.dailyForecast} />
          <Welcome />
        </div>
      );
    }
  }
}

export default App;
