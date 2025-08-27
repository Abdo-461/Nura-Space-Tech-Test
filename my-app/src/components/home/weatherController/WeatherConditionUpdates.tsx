interface WeatherConditionUpdatesProps {
	updates: any[];
}

export default function WeatherConditionUpdates({ updates }: WeatherConditionUpdatesProps) {
	return (
		<div className="weather-condition-updates">
			<h3 className="weather-condition-title">Weather in your Favourite Cities</h3>
			{updates.length > 0 && (
				<div className="updates">
					<ul>
						{updates.map((update, index) => (
							<li key={index}>
								<strong>{update.city}:</strong> {update.message} (Temp: {update.temperature}°C)
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}
