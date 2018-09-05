import React, { Component } from "react";
import Search from "./Components/Search";
import Card from "./Components/Card";
import CurrentWeather from "./Components/CurrentWeather";
import SevenHour from "./Components/SevenHour";
import TenDay from "./Components/TenDay";
import Welcome from "./Components/Welcome";
import data from "./mockAPI.js";
import "./App.css";

class App extends Component {
  state = {
    city: data.current_observation.display_location.full,
    country: data.current_observation.display_location.country,
    temperature: data.current_observation.temp_f,
    weather: data.current_observation.weather,
    feelsLike: data.current_observation.feelslike_f,
    humidity: data.current_observation.relative_humidity,
    wind: data.current_observation.wind_string
  };

  getWeather = () => {
    this.setState({
      city: data.current_observation.display_location.full,
      country: data.current_observation.display_location.country,
      temperature: data.current_observation.temp_f,
      weather: data.current_observation.weather,
      feelsLike: data.current_observation.feelslike_f,
      humidity: data.current_observation.relative_humidity,
      wind: data.current_observation.wind_string
    });
  };

  render() {
    return (
      <div>
        <CurrentWeather
          city = {this.state.city}
          country = {this.state.country}
          temperature = {this.state.temperature}
          weather = {this.state.weather}
          feelsLike = {this.state.feelsLike}
          humidity = {this.state.humidity}
          wind = {this.state.wind}
        />
        <Search />
        <Card />
        <SevenHour />
        <TenDay />
        <Welcome />
      </div>
    );
  }
}

export default App;
