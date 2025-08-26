import React from 'react'
import Greeting from './Greeting';
import WeatherWidget from './WeatherWidget';

export default function HomePage() {

	const GreetingProps = {
		nameOne: sessionStorage.getItem('firstName') || 'Guest',
		nameTwo: sessionStorage.getItem('lastName') || ''
	};

	return (
		<div className="home-page">
			<Greeting {...GreetingProps} />
			<WeatherWidget />
		</div>


	)
}
