import React, { Component } from "react";
import Search from "./Components/Search";
import CurrentWeather from "./Components/CurrentWeather";
import SevenHour from "./Components/SevenHour";
import TenDay from "./Components/TenDay";
import apiConfig from "./apiKey";
import "./App.css";
import Welcome from "./Components/Welcome";

const apiKey = apiConfig.weatherUndergroundApiKey;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      location: [],
      currentConditions: "",
      currentObservation: "",
      hourlyForecast: "",
      dailyForecast: "",
      isToggleOn: true
    };
  }

  componentDidMount() {
    if (this.retrieveLastLocation()) {
      let location = JSON.parse(this.retrieveLastLocation());
      this.fetchData(`${location[1]}/${location[0]}`);
    } else {
      this.fetchData("autoip");
    }
  }

  fetchData = location => {
    fetch(
      `http://api.wunderground.com/api/${apiKey}/geolookup/conditions/hourly/forecast10day/q/${location}.json`
    )
      .then(response => response.json())
      .then(response => {
        if (response.response.error) {
          this.setState({ location: [] });
          return;
        }
        this.setState({
          currentConditions:
            response.forecast.txt_forecast.forecastday["0"].fcttext,
          currentObservation: response.current_observation,
          hourlyForecast: response.hourly_forecast,
          dailyForecast: response.forecast
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  fetchDataZipCode = zip => {
    fetch(`http://api.wunderground.com/api/${apiKey}/geolookup/q/${zip}.json`)
      .then(response => response.json())
      .then(response => {
        if (response.response.error) {
          this.setState({ location: null });
          return;
        }
        let cityCall = response.location.city + ", " + response.location.state;
        this.updateLocation(cityCall);
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  updateLocation = location => {
    location = location.split(",").map(loc => loc.trim());
    this.setState({
      location: [location[0], location[1]]
    });
    this.fetchData(`${location[1]}/${location[0]}`);
    this.storeLastLocation(location);
  };

  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  };

  retrieveLastLocation() {
    return localStorage.getItem("location");
  }

  storeLastLocation(location) {
    let stringified = JSON.stringify(location);
    localStorage.setItem("location", stringified);
  }

  render() {
    if (!this.state.location) {
      return (
        <div>
          <Welcome />
          <Search
            updateLocation={this.updateLocation}
            fetchDataZipCode={this.fetchDataZipCode}
          />
          <h4>
            Error: Location Not Found <br />
            Please enter Zip Code or City, State
            <br />
            Example: 'Denver, CO'
          </h4>
        </div>
      );
    }
    if (this.state.currentObservation) {
      if (this.state.isToggleOn) {
        return (
          <div>
            <Welcome />
            <Search
              updateLocation={this.updateLocation}
              fetchDataZipCode={this.fetchDataZipCode}
            />
            <CurrentWeather
              currentObservation={this.state.currentObservation}
              currentConditions={this.state.currentConditions}
            />
            <button className="toggle-button" onClick={this.handleClick}>
              {this.state.isToggleOn ? "HOURLY" : "DAILY"}
            </button>
            <SevenHour hourlyForecast={this.state.hourlyForecast} />
          </div>
        );
      } else {
        return (
          <div>
            <Welcome />
            <Search
              updateLocation={this.updateLocation}
              fetchDataZipCode={this.fetchDataZipCode}
            />
            <CurrentWeather
              currentObservation={this.state.currentObservation}
              currentConditions={this.state.currentConditions}
            />
            <button className="toggle-button" onClick={this.handleClick}>
              {this.state.isToggleOn ? "HOURLY" : "DAILY"}
            </button>
            <TenDay dailyForecast={this.state.dailyForecast} />
          </div>
        );
      }
    } else {
    }
    return <div />;
  }
}
