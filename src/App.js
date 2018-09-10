import React, { Component } from "react";
import Search from "./Components/Search";
import CurrentWeather from "./Components/CurrentWeather";
import SevenHour from "./Components/SevenHour";
import TenDay from "./Components/TenDay";
//import Welcome from "./Components/Welcome";
import data from "./mockAPI.js";
import apiConfig from "./apiKey";
import "./App.css";

const apiKey = apiConfig.weatherUndergroundApiKey;

class App extends Component {
  constructor() {
    super();

    this.state = {
      city: "",
      state: "",
      currentObservation: data.current_observation,
      hourlyForecast: data.hourly_forecast,
      dailyForecast: data.forecast,
      isToggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
  }

  fetchData() {
    fetch(
      `http://api.wunderground.com/api/${apiKey}/geolookup/conditions/hourly/forecast10day/q/${
        this.state.state
      }/${this.state.city}.json`
    )
      .then(response => response.json())
      .then(response => {
        let cityCall = response;
        this.setState({
          currentObservation: cityCall.current_observation,
          hourlyForecast: cityCall.hourly_forecast,
          dailyForecast: cityCall.forecast,
        });
      });
    // .catch(err => {
    //   throw new Error(err);
    // });
  }

  //encodeURIComponent()

  updateLocation(location) {
    location = location.split(",");
    this.setState({
      city: location[0],
      state: location[1]
    });
    this.fetchData();
    this.storeLastLocation(location);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  retrieveLastLocation = () => {
    return JSON.parse(localStorage.getItem("location")) || "";
  };

  
  storeLastLocation = (location) => {
    let stringified = JSON.stringify(location);
    localStorage.setItem("location", stringified);
  };
  
  render() {
    if (this.state.isToggleOn) {
      return (
        <div>
          <Search updateLocation={this.updateLocation} />
          <CurrentWeather currentObservation={this.state.currentObservation} />
          <button className="toggle-button" onClick={this.handleClick}>
            {this.state.isToggleOn ? "HOURLY" : "DAILY"}
          </button>
          <SevenHour hourlyForecast={this.state.hourlyForecast} />
        </div>
      );
    } else {
      return (
        <div>
          <Search updateLocation={this.updateLocation} />
          <CurrentWeather currentObservation={this.state.currentObservation} />
          <button className="toggle-button" onClick={this.handleClick}>
            {this.state.isToggleOn ? "HOURLY" : "DAILY"}
          </button>
          <TenDay dailyForecast={this.state.dailyForecast} />
        </div>
      );
    }
  }
}

export default App;
