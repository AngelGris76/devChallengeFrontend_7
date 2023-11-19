import { AbortError } from '../myErrors';

export const getCities = async ({ cityName, abortSignal }) => {
	const API_URL = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=20&language=en&format=json`;

	try {
		const res = await fetch(API_URL, { signal: abortSignal });
		const data = await res.json();

		return data.results || [];
	} catch (e) {
		if (e.name === 'AbortError')
			throw new AbortError('error de peticion por react');
		throw e;
	}
};
