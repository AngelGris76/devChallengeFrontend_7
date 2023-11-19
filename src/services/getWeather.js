import { AbortError } from '../myErrors';

const WEATHER_API = `https://api.open-meteo.com/v1/forecast?forecast_days=6&current=temperature_2m,relative_humidity_2m,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m,visibility&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_direction_10m_dominant&`;

export const getWeather = ({ latitude, longitude, timezone, abortSignal }) => {
	const QUERY = `latitude=${latitude}&longitude=${longitude}&timezone=${timezone}`;
	return fetch(`${WEATHER_API}${QUERY}`, { signal: abortSignal })
		.then((res) => res.json())
		.then((data) => data)
		.catch((e) => {
			if (e.name === 'AbortError')
				throw new AbortError('cancelacion de peticion');
			throw e;
		});
};
