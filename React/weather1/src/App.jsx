import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_KEY = "a1beedffad4f0d07c8d9320d45156669";

export default function App() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const axiosWeather = async (cityName) => {
    if (!cityName.trim()) {
      setError("도시 이름을 입력해주세요.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=kr`
      );
      setWeather(response.data);
      setError("");
    } catch (err) {
      console.error("날씨 API 오류 :", err);
      setError("날씨 정보를 불러올 수 없습니다. 도시 이름을 확인 해주세요.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWeather(city);
  };

  useEffect(() => {
    axiosWeather("Seoul");
  }, []);

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">🌤️날씨앱</h1>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="도시 이름을 입력하세요(예: Seoul, Tokyo)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button" disabled={loading}>
            {loading ? "검색중 . . ." : "검색"}
          </button>
        </form>
        {error && <div className="error">{error}</div>}
        {weather && !loading && (
          <div className="weather-card">
            <div className="weather-header">
              <h2 className="city-name">
                {weather.name}, {weather.sys.country}
              </h2>
              <div className="weather-icon">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                  alt={weather.weather[0].description}
                />
              </div>
            </div>

            <div className="temperature">{Math.round(weather.main.temp)}°C</div>

            <div className="weather-description">
              {weather.weather[0].description}
            </div>

            <div className="weather-details">
              <div className="detail-item">
                <span className="detail-label">체감 온도</span>
                <span className="detail-value">
                  {Math.round(weather.main.feels_like)}°C
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">습도</span>
                <span className="detail-value">{weather.main.humidity}%</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">풍속</span>
                <span className="detail-value">{weather.wind.speed} m/s</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">기압</span>
                <span className="detail-value">
                  {weather.main.pressure} hPa
                </span>
              </div>
            </div>
          </div>
        )}
        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>날씨 정보 불러오는중 . . .</p>
          </div>
        )}
      </div>
    </div>
  );
}
