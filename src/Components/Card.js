import React from 'react';

function Card(props) {
  const data = Object.keys(props)
  console.log(props)
  if (data.includes('FCTTIME')) {
   return(
      <div>
        <h1>{props.FCTTIME.hour}</h1>
        <img src={props.icon_url} />
      </div>
    )
  } else {
    return(
      <div>
        <h1>{props.date.weekday}</h1>
      </div>
    )
  }
}

//USE conditional rendering to append 7 hour or 10 day forecast cards in one file

//ASK IF THIS PROP IS BEING USED THEN DISPLAY THIS HTML 

export default Card;

