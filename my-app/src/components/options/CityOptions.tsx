import React from 'react'
import { useCallback } from 'react';

interface CityOptionsProps {
	cities: string[];
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	value: string | null;
}
export default function CityOptions({ cities, onChange, value }: CityOptionsProps) {

	const handleChange =
		useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
			if (e.target.value !== value) {
				onChange(e);
			}
		}, [onChange, value]);

	return (
		<div>
			<h3 className="weather-title">Check the Weather</h3>
			<select
				className="weather-select"
				onChange={handleChange}
			>
				<option value="">-- no selection --</option>
				{cities.map(cities => (
					<option key={cities} value={cities}>{cities}</option>
				))}
			</select>
		</div>
	)
}
