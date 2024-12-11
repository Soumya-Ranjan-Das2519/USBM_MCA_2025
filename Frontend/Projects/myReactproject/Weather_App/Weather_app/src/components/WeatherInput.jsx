import React from "react";

const WeatherInput = ({ city, setCity, fetchWeather }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>
    </div>
  );
};

export default WeatherInput;
