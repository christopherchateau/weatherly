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
    location: undefined,
    temperature: undefined,
    weather: undefined,
    city: undefined,
    feelsLike: undefined,
    humidity: undefined,
    wind: undefined
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
        <h1>{data.current_observation.display_location.full}  {data.current_observation.display_location.country}</h1>
        <h3>
          {data.current_observation.temp_f}° F -{" "}
          {data.current_observation.weather}
        </h3>
        <h3>Feels Like: {data.current_observation.feelslike_f}° F</h3>
        <h3>Wind: {data.current_observation.wind_string}</h3>
        <h3>Humidity: {data.current_observation.relative_humidity}</h3>
        <h3 />
        <CurrentWeather 
              location={this.state.location}
              temperature={this.state.temperature}
              weather={this.state.weather}
              city={this.state.city}
              feelsLike={this.state.feelLike}
              humidity={this.state.humidity}
              wind={this.state.wind}
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
