import React from "react";

const WeatherDisplay = ({ weather }) => {
  return (
    <div className="weather-data">
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;
