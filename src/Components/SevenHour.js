import React from "react";
import Card from "./Card";

function SevenHour(props) {
  const sevenHourData = props.hourlyForecast.slice(0, 7);
  return (
    <div className="sevenHourCards">
      {sevenHourData.map((data, index) => {
        return (
          <Card
            hour={data.FCTTIME.hour}
            icon={data.icon}
            temp={data.temp.english}
            condition={data.condition}
            chanceOfRain={data.pop}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default SevenHour;
