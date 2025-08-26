import React from 'react'

interface WeatherInfoProps {
    weatherData: any;
    loading: boolean;
    selectedCity: string | null;
}

export default function WeatherInfo(weatherInfoProps: { weatherData: any; loading: boolean; selectedCity: string | null }) {
  return (
    <div>
        {weatherInfoProps.loading && <p>Loading...</p>}
        {weatherInfoProps.weatherData && !weatherInfoProps.loading && (
        <div className="weather-info">
            <h4>Weather Data for {weatherInfoProps.selectedCity}:</h4>

            <p>Temperature: {weatherInfoProps.weatherData.current_condition[0].temp_C}°C</p>
            <p>Feels Like : {weatherInfoProps.weatherData.current_condition[0].FeelsLikeC}°C</p>
        </div>
        )}
    </div>
  )
}
