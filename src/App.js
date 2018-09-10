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
      location: '',
      city: data.current_observation.display_location.full,
      currentObservation: data.current_observation,
      hourlyForecast: data.hourly_forecast,
      dailyForecast: data.forecast,
      isToggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
  }

  fetchData() {
    fetch(`http://api.wunderground.com/api/${apiKey}/geolookup/conditions/hourly/forecast10day/q/${this.state.location}.json`)
      .then(response => response.json())
      .then(response => console.log(response))
      .then(response => {
        this.setState({
            city: response.data.current_observation.display_location.full,
            // currentObservation: data.current_observation,
            // hourlyForecast: data.hourly_forecast,
            // dailyForecast: data.forecast,
        });
      })
      // .catch(err => {
      //   throw new Error(err);
      // });
  }

  //encodeURIComponent()

  updateLocation(location) {
    this.setState({
      location: location
    })
    this.fetchData();
  }

  getWeather = () => {
    this.setState({});
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
          <Search updateLocation={this.updateLocation}/>
          <CurrentWeather currentObservation={this.state.currentObservation} />
          <button 
            className="toggle-button"
            onClick={this.handleClick}>
            {this.state.isToggleOn ? "HOURLY" : "DAILY"}
          </button>
          <SevenHour hourlyForecast={this.state.hourlyForecast} />
        </div>
      );
    } else {
      return (
        <div>
          <Search 
            updateLocation={this.updateLocation}/>
          <CurrentWeather currentObservation={this.state.currentObservation} />
          <button 
            className="toggle-button"
            onClick={this.handleClick}>
            {this.state.isToggleOn ? "HOURLY" : "DAILY"}
          </button>
          <TenDay dailyForecast={this.state.dailyForecast} />
        </div>
      );
    }
  }
}

export default App;
