import React from 'react';
import Card from "./Card";

function TenDay(props) {
  const { forecastday } = props.dailyForecast.simpleforecast;
  // console.log(forecastday )
   return ( 
       <div className="tenDayCards">
        {forecastday.map( (day, index) => {
          return(
              <Card {...day} key={index} />
            )
        })}
      </div> 
    );
}

export default TenDay;