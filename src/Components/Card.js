import React from "react";
import "./Card.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSnowflake,
  faSun,
  faCloud,
  faUmbrella,
  faBolt,
  faFeather
} from "@fortawesome/free-solid-svg-icons";

library.add(faSnowflake, faSun, faCloud, faUmbrella, faBolt, faFeather);

function Card(props) {
  const icons = {
    clear: "sun",
    sunny: "sun",
    mostlysunny: "sun",
    partlysunny: "sun",
    cloudy: "cloud",
    partlycloudy: "cloud",
    mostlycloudy: "cloud",
    fog: "cloud",
    hazy: "cloud",
    chancerain: "umbrella",
    rain: "umbrella",
    chancetstorms: "bolt",
    tstorms: "bolt",
    snow: "snowflake",
    sleet: "snowflake",
    chanceflurries: "snowflake",
    chancesleet: "snowflake",
    chancesnow: "snowflake",
    flurries: "snowflake",
    windy: "feather"
  };

  const data = Object.keys(props);
  if (data.includes("chanceOfRain")) {
    let hour = props.hour;

    hour > 12 ? (hour = `${hour - 12} pm`) : (hour = `${hour} am`);

    let chanceOfRain = props.chanceOfRain;

    chanceOfRain == 0
      ? (chanceOfRain = "")
      : (chanceOfRain = `Chance of Rain ${chanceOfRain}%`);

    return (
      <div className="card">
        <h1>{hour}</h1>
        <FontAwesomeIcon icon={icons[props.icon]} />
        <h1>{Math.round(props.temp)}° F</h1>
        <p>{props.condition}</p>
        <p>{chanceOfRain}</p>
      </div>
    );
  } else {
    return (
      <div className="card">
        <h1>{props.weekDay}</h1>
        <FontAwesomeIcon icon={icons[props.icon]} />
        <h3>{props.highTemp}° F</h3>
        <h3>{props.lowTemp}° F</h3>
        <p>{props.conditions}</p>
      </div>
    );
  }
}

export default Card;
