import React, { Component } from "react";
// import Search from "./Components/Search";
// import Card from "./Components/Card";
// import CurrentWeather from "./Components/CurrentWeather";
// import SevenHour from "./Components/SevenHour";
// import TenDay from "./Components/TenDay";
// import Welcome from "./Components/Welcome";
import data from "./mockAPI.js";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div>
        <h1>{data.current_observation.display_location.full}</h1>
        <h3>{data.current_observation.temp_f}° F - {data.current_observation.weather}</h3>
        <h3>Feels Like: {data.current_observation.feelslike_f}° F</h3>
        <h3>Wind: {data.current_observation.wind_string}</h3>
        <h3>Humidity: {data.current_observation.relative_humidity}</h3>
        <h3></h3>
        {/* <Search />
        <Card />
        <CurrentWeather />
        <SevenHour />
        <TenDay />
        <Welcome /> */}
      </div>
    );
  }
}

export default App;