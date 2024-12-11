import React, { useState } from "react";
import WeatherInput from "./WeatherInput";
import WeatherDisplay from "./WeatherDisplay";
import WeatherError from "./WeatherError";
import '../styles/weather.css';

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    setError("");
    setWeather(null);
    setLoading(true);

    try {
      const apiKey = "0ac3ba5edb7adb17f52e3ba3884d660a"; 
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();

      if (response.ok) {
        setWeather(data);
      } else {
        setError(data.message || "Unable to fetch weather data.");
      }
    } catch (err) {
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-container">
      <h1>My Weather App</h1>
      <WeatherInput city={city} setCity={setCity} fetchWeather={fetchWeather} />
      {loading && <p>Loading...</p>}
      {error && <WeatherError error={error} />}
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
};

export default Weather;
