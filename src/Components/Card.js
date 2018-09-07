import React from "react";

function Card(props) {
  const data = Object.keys(props);
  if (data.includes("FCTTIME")) {
    let hour = props.FCTTIME.hour;

    hour > 12 
      ? (hour = `${hour - 12} am`) 
      : (hour = `${hour} pm`);

    return (
      <div>
        <h1>{hour}</h1>
        <img src={props.icon_url} />
        <h1>{props.temp.english}° F</h1>
      </div>
    );
  } else {
    let chanceOfRain = props.pop;

    chanceOfRain === 0
      ? (chanceOfRain = "")
      : (chanceOfRain = `Chance of Rain ${chanceOfRain} %`);

    return (
      <div>
        <h1>{props.date.weekday.slice(0, 3)}</h1>
        <img src={props.icon_url} />
        <h1>HIGH OF {props.high.fahrenheit}° F</h1>
        <h1>LOW OF {props.low.fahrenheit}° F</h1>
        <p>Conditions: {props.conditions}</p>
        <p>{chanceOfRain}</p>
      </div>
    );
  }
}

export default Card;
