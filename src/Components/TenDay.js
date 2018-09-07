import React from 'react';
import Card from "./Card";

function TenDay(props) {
  const { forecastday } = props.dailyForecast.simpleforecast;
  // console.log(forecastday )
   return ( 
       <div>
        {forecastday.map( (day, index) => {
          return(
              <Card {...day} key={index} />
            )
        })}
      </div> 
    );
}

export default TenDay;