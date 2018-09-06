import React from 'react';

function Card(props) {
  const data = Object.keys(props)
  console.log(props)
  if (data.includes('FCTTIME')) {
   return(
      <div>
        <h1>{props.FCTTIME.hour}</h1>
        <img src={props.icon_url} />
        <h1>{props.temp.english}° F</h1>
      </div>
    )
  } else {
    return(
      <div>
        <h1>{props.date.weekday}</h1>
        <img src={props.icon_url} />
        <h1>HIGH OF {props.high.fahrenheit}° F</h1>
        <h1>LOW OF {props.low.fahrenheit}° F</h1> 
        <p>Conditions: {props.conditions}</p>
      </div>
    )
  }
}

export default Card;

