import { useState, useEffect } from 'react';
import { AbortError } from '../myErrors';
import { getWeather } from '../services/getWeather';

const DEFAULT_GEOLOC = {
	name: 'Wilde',
	latitude: -34.69467,
	longitude: -58.31287,
	timezone: 'America/Argentina/Buenos_Aires',
};

/**
 *
 * @param {object} weatherRequest
 * @param {{}} weatherRequest.weather - weather info
 * @param {number} weatherRequest.dayIndex - day index from 0 (0 is today weather) to 6
 * @returns {{date:string, minTemp:number, maxTemp:number, weatherCode:number}} - object with weather
 * info for giving day
 */
const getWeatherByDay = ({ weather, dayIndex }) => {
	const date = weather.daily.time[dayIndex];
	const minTemp = weather.daily.temperature_2m_min[dayIndex];
	const maxTemp = weather.daily.temperature_2m_max[dayIndex];
	const weatherCode = weather.daily.weather_code[dayIndex];
	return { date, minTemp, maxTemp, weatherCode };
};

/**
 *
 * @param {object} weatherRequest
 * @param {{}} weatherRequest.weather - weather info from api
 * @returns {[]} - list of weather
 */

const getListWeather = ({ weather }) => {
	const forecastWeather = [];

	if (Object.hasOwn(weather.info, 'daily')) {
		for (let index = 1; index < weather.info.daily.time.length; index++) {
			forecastWeather.push(
				getWeatherByDay({ weather: weather.info, dayIndex: index }),
			);
		}
	}

	return [...forecastWeather];
};

export const useWeather = () => {
	const [geoLoc, setGeoLoc] = useState(DEFAULT_GEOLOC);
	const [weather, setWeather] = useState({ info: {}, searching: true });

	const loadWeather = (geolocData) => {
		setGeoLoc(geolocData);
		setWeather((prevValue) => ({ ...prevValue, searching: true }));
	};

	useEffect(() => {
		if (!weather.searching) return;
		const weatherController = new AbortController();
		const abortSignal = weatherController.signal;
		const { latitude, longitude, timezone } = geoLoc;

		getWeather({ latitude, longitude, timezone, abortSignal })
			.then((data) => {
				setWeather({ info: data, searching: false });
			})
			.catch((e) => {
				if (e instanceof AbortError) console.log(e.message);
				else console.log('otro tipo de error');
			});

		return () => weatherController.abort();
	}, [geoLoc, weather.searching]);

	const forecastWeather = getListWeather({ weather });
	const todayWeather = weather.info?.current || {};

	return {
		city: geoLoc.name,
		forecastWeather,
		todayWeather,
		searching: weather.searching,
		loadWeather,
		setGeoLoc,
	};
};
