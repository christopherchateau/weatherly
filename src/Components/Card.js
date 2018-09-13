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
  if (data.includes("FCTTIME")) {
    let hour = props.FCTTIME.hour;
    let { condition, pop, icon } = props;

    hour > 12 ? (hour = `${hour - 12} pm`) : (hour = `${hour} am`);

    pop == 0
      ? (pop = "")
      : (pop = `Chance of Rain ${pop}%`);

    return (
      <div className="card">
        <h1>{props.FCTTIME.hour}</h1>
        <FontAwesomeIcon icon={icons[icon]} />
        <h1>{Math.round(props.temp.english)}° F</h1>
        <p>{condition}</p>
        <p>{pop}</p>
      </div>
    );
  } else {
    return (
      <div className="card">
        <h1>{props.date.weekday.slice(0, 3)}</h1>
        <FontAwesomeIcon icon={icons[props.icon]} />
        <h3>{props.high.fahrenheit}° F</h3>
        <h3>{props.low.fahrenheit}° F</h3>
        <p>{props.conditions}</p>
      </div>
    );
  }
}

export default Card;
