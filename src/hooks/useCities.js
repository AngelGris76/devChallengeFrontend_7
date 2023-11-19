import { useState } from 'react';
import { getCities } from '../services/getCities';
import { AbortError } from '../myErrors';

export const useCities = () => {
	const [cities, setCities] = useState([]);
	const [searching, setSearching] = useState(false);

	const refreshCities = ({ cityName, abortSignal }) => {
		setSearching(true);
		getCities({ cityName, abortSignal })
			.then((res) => {
				setCities(res);
				setSearching(false);
			})
			.catch((e) => {
				if (e instanceof AbortError) {
					console.log('peticion abortada por react');
					return;
				}
				console.log('Otro tipo de error');
				setSearching(false);
			});
	};

	return { cities, searching, refreshCities };
};
