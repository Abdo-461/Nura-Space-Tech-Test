import express from 'express';
import { WebSocketServer } from 'ws';
import http from 'http';

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// Store city/weather data subscriptions
const citySubscriptions = {};

// Check weather and send notification to subscribers on weather condition change
const sendWeatherUpdate = (city) => {
	const cityData = citySubscriptions[city];
	if (!cityData) return;

	const temperature = cityData.temperature;
	const weatherCondition = temperature > 18 ? 'It`s time to take out the convertible!' : 'Brrrrrrrrrr!!!!';

	const weatherData = {
		city,
		temperature: temperature,
		message: weatherCondition
	}
	// notfy subscribers for the weather update
	cityData.subscribers.forEach((ws) => {
		if (ws.readyState === ws.OPEN) {
			ws.send(JSON.stringify(weatherData));
		}
	})
}

// Establish WebSocket connection
wss.on('connection', (ws) => {
	console.log('New client connected');

	// Handle incoming reqs from clients
	ws.on('message', (message) => {
		const { type, city, temperature } = JSON.parse(message);
		if (type === 'subscribe') {
			if (!citySubscriptions[city]) {
				// intialize array for city if it doesn't exist
				citySubscriptions[city] = {
					subscribers: [],
					temperature: temperature,
					interval: setInterval(() => sendWeatherUpdate(city), 5000) // send update every 5 seconds
				};
			}
			citySubscriptions[city].subscribers.push(ws);
			citySubscriptions[city].temperature = temperature; // update temperature on new subscription(city temperature might change, Melbourne right?)

			console.log(`Client subscribed to ${city}, Client will receive updates every 5 seconds`);
		}
	})


	// Clean up on client disconnect
	ws.on('close', () => {
		// Remove ws from all city subscriptions or else memory leak when client disconnects
		Object.keys(citySubscriptions).forEach((city) => {
			const cityData = citySubscriptions[city];
			cityData.subscribers = cityData.subscribers.filter((subscriber) => subscriber !== ws);

			if (!cityData.subscribers.length) {
				clearInterval(cityData.interval);
				delete citySubscriptions[city];
				console.log(`No more subscribers for ${city}. Updates are suspended.`);
			}
		})
	});

});

server.listen(5050, () => {
	console.log('Server is listening on port 5050');
});