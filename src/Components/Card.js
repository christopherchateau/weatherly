import React from "react";
import "./Card.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake, faSun, faCloud, faUmbrella, faBolt, faFeather } from "@fortawesome/free-solid-svg-icons";

library.add(faSnowflake, faSun, faCloud, faUmbrella, faBolt, faFeather  );

function Card(props) {
  const icons = {
    cloudy: 'cloud',
    partlycloudy: 'cloud',
    clear: 'sun',
    snow: 'snowflake',
    rain: 'umbrella',
    chancerain: 'umbrella',
    windy: 'feather',
    storm: 'bolt'
  }

  // console.log(props.icon)
  const data = Object.keys(props);
  if (data.includes("FCTTIME")) {
    let hour = props.FCTTIME.hour;

    hour > 12 
      ? (hour = `${hour - 12} am`) 
      : (hour = `${hour} pm`);
      
    return (
        <div className="card">
          <h1>{hour}</h1>
          <FontAwesomeIcon icon={icons[props.icon]} />
          <h1>{props.temp.english}° F</h1>
        </div>
    );
  } else {
    let chanceOfRain = props.pop;

    chanceOfRain === 0
      ? (chanceOfRain = "")
      : (chanceOfRain = `Chance of Rain ${chanceOfRain} %`);

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
