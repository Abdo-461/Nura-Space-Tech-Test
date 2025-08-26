import React from 'react'
import WeatherInfo from './WeatherInfo';
import CityOptions from '../options/CityOptions';


const cities = [
    'New York', 'London', 'Tokyo', 'Paris', 'Sydney',
    'Dubai', 'Singapore', 'Toronto', 'Berlin', 'Cape Town',
    'Rio de Janeiro', 'Moscow', 'Mumbai', 'Beijing',
    'Los Angeles', 'Chicago', 'Melbourne'
];

export default function WeatherWidget() {

    const [city, setCity] = React.useState(cities);
    const [selectedCity, setSelectedCity] = React.useState<string | null>(null);
    const [loading, setLoading] = React.useState(false);
    const [weatherData, setWeatherData] = React.useState<any>(null);


    const handleCityChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const citySelected = e.target.value;
        setSelectedCity(citySelected);

        if (!citySelected) {
            setWeatherData('');
            setCity(cities);
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
        } catch (error) {
            alert('Failed to fetch weather data. Please try again later.' + error);

        }
        setLoading(false);
    };

    return (
        <div>
            <div className="weather-widget">
                <CityOptions
                    cities={city}
                    onChange={handleCityChange}
                    value={selectedCity} />
                <WeatherInfo
                    weatherData={weatherData}
                    loading={loading}
                    selectedCity={selectedCity} />
            </div>
        </div>
    )
}
