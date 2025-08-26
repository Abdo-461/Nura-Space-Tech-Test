import React from 'react'


const cities = [
  'New York', 'London', 'Tokyo', 'Paris', 'Sydney',
  'Dubai', 'Singapore', 'Toronto', 'Berlin', 'Cape Town',
  'Rio de Janeiro', 'Moscow', 'Mumbai', 'Beijing', 
  'Los Angeles', 'Chicago','Melbourne'
];

export default function WeatherWidget() {

    const [city, setCity] = React.useState(cities);
    const [selectedCity, setSelectedCity] = React.useState<string | null>(null);
    const [loading, setLoading] = React.useState(false);
    const [weatherData, setWeatherData] = React.useState<any>(null);


    const handleCityChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
      
        const citySelected = e.target.value;
        setSelectedCity(citySelected);

        if(!citySelected){
            setWeatherData('');
            return;
        }
        setLoading(true);
        try {
            const response = await fetch(`https://wttr.in/${selectedCity}?format=j1`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setWeatherData(data);
        }catch (error) {
            alert('Failed to fetch weather data. Please try again later.' + error);

        }
        setLoading(false);
    };  

  return (
    <div>
    <h3 style={{ color: '#5138ee', marginBottom: 16 }}>Check the Weather</h3>

    <div className="weather-widget">
    <h3 className="weather-title">Check the Weather</h3>
    <select
      className="weather-select"
      onChange={handleCityChange}
    >
      <option value="">-- no selection --</option>
      {cities.map(cities => (
        <option key={cities}>{cities}</option>
      ))}
    </select>
    
    {loading && <p>Loading...</p>}
    {weatherData && !loading && (
      <div className="weather-info">
        <h4>Weather Data for {selectedCity}:</h4>

        <p>Temperature: {weatherData.current_condition[0].temp_C}°C</p>
        <p>Feels Like : {weatherData.current_condition[0].FeelsLikeC}°C</p>
      </div>
    )}

  </div>

    </div>
  )
}
