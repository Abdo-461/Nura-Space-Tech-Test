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

            <p>Temperature: {weatherData.current_condition[0].temp_C}°C</p>
            <p>Feels Like : {weatherData.current_condition[0].FeelsLikeC}°C</p>
        </div>
        )}
    </div>
  )
}
