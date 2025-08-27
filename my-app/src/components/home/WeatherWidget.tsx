import React from 'react'
import WeatherInfo from './WeatherInfo';
import CityOptions from '../options/CityOptions';
import WeatherConditionUpdates from './WeatherConditionUpdates';
import { useEffect, useRef } from 'react';


const cities = [
	'New York', 'London', 'Tokyo', 'Paris', 'Sydney',
	'Dubai', 'Singapore', 'Toronto', 'Berlin', 'Cape Town',
	'Rio de Janeiro', 'Moscow', 'Mumbai', 'Beijing',
	'Los Angeles', 'Chicago', 'Melbourne'
];
interface WeatherUpdate {
	city: string;
	temperature: number;
	message: string;
}

export default function WeatherWidget() {

	const [city, setCity] = React.useState(cities);
	const [selectedCity, setSelectedCity] = React.useState<string | null>(null);
	const [loading, setLoading] = React.useState(false);
	const [weatherData, setWeatherData] = React.useState<any>(null);
	const [updates, setUpdates] = React.useState<WeatherUpdate[]>([]);
	const wsRef = useRef<WebSocket | null>(null);

	useEffect(() => {
		const ws = new WebSocket('ws://localhost:5050');
		wsRef.current = ws;

		ws.onopen = () => console.log('WebSocket Client Connected');

		ws.onmessage = (event) => {
			const data: WeatherUpdate = JSON.parse(event.data);
			setUpdates(prev => [...prev, data]);
		};

		ws.onclose = () => console.log('Disconnected from WebSocket server');

		return () => {
			ws.close();
		};

	}, []);



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
			const response = await fetch(`https://wttr.in/${citySelected}?format=4`);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await response.text();

			// Extract temperature from the response string
			const matchTemp = data.match(/([-+]?\d+)(?=°C)/);
			const tempOfCity = matchTemp ? parseInt(matchTemp[1], 10) : null;

			setWeatherData(data);

			// Send subscription message to WebSocket server
			if (tempOfCity !== null && wsRef.current?.readyState === WebSocket.OPEN) {
				wsRef.current.send(JSON.stringify({
					type: 'subscribe',
					city: citySelected,
					temperature: tempOfCity
				}));
			}

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
				<WeatherConditionUpdates
					updates={updates} />
			</div>
		</div>
	)
}
