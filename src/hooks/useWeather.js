import { useState, useEffect } from 'react';
import { AbortError } from '../myErrors';
import { getWeather } from '../services/getWeather';

const DEFAULT_GEOLOC = {
	name: 'Wilde',
	latitude: -34.69467,
	longitude: -58.31287,
	timezone: 'America/Argentina/Buenos_Aires',
};

export const useWeather = () => {
	const [geoLoc, setGeoLoc] = useState(DEFAULT_GEOLOC);
	const [weather, setWeather] = useState({ info: {}, searching: true });

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

	return { city: geoLoc.name, weather, setWeather, setGeoLoc };
};
