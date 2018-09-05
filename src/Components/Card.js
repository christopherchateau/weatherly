import React from 'react';

function Card(props) {
    console.log(props)
    return(
      <div>
        <h1>{props.FCTTIME.hour}</h1> 
        <img src={props.icon_url} />
        <h1>{props.temp.english}° F</h1> 
      </div> 
  )
}

export default Card;

