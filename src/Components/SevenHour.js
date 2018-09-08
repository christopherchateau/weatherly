import React from 'react';
import Card from "./Card";
import ToggleWeather from './ToggleWeather'

function SevenHour(props)  {
  const sevenHourData = props.hourlyForecast.slice(0, 7);
  return ( 
     <div className="sevenHourCards">
       {sevenHourData.map( (data, index) => {
          return(
              <Card {...data} key={index} />
            )
       })}
     </div> 
   );
}

export default SevenHour;
