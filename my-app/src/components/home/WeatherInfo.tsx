import React from 'react'

interface WeatherInfoProps {
  weatherData: any;
  loading: boolean;
  selectedCity: string | null;
}

export default function WeatherInfo({ weatherData, loading, selectedCity }: WeatherInfoProps) {
  return (
    <div>
      {loading && <p>Loading...</p>}
      {weatherData && !loading && (
        <div className="weather-info">
          <h4>Weather Data for {selectedCity}:</h4>
          <p>{weatherData}</p>
        </div>
      )}
    </div>
  )
}
