import React from "react";
import Card from "./Card";

function TenDay(props) {
  const { forecastday } = props.dailyForecast.simpleforecast;
  return (
    <div className="tenDayCards">
      {forecastday.map((day, index) => {
        return (
          <Card
            icon={day.icon}
            weekDay={day.date.weekday_short}
            highTemp={day.high.fahrenheit}
            lowTemp={day.low.fahrenheit}
            conditions={day.conditions}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default TenDay;
