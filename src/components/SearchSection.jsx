import { useEffect, useRef, useState } from 'react';
import { useCities } from '../hooks/useCities';
import { SearchBar } from './SearchBar';
import { Spinner } from './Spinner';
import './SearchSection.css';

// -------

const TRANSITION_STATUS = {
	init: 'transitionInit',
	finished: 'transitionFinished',
	close: 'windowClose',
	selectedCity: 'changeCity',
};

// ------

export const SearchSection = ({ handleClose, geoLocSetter }) => {
	const { cities, searching, refreshCities } = useCities();
	// ----------

	const [transition, setTransition] = useState(TRANSITION_STATUS.init);
	const [geoLocData, setGeoLocData] = useState({});
	const referenced = useRef();

	useEffect(() => {
		const styleTransition = (ev) => {
			if (
				ev.target === referenced.current &&
				transition === TRANSITION_STATUS.close
			)
				handleClose();
			else {
				if (
					ev.target === referenced.current &&
					transition === TRANSITION_STATUS.selectedCity
				)
					geoLocSetter(geoLocData);
			}
		};

		let timeOut;

		document.addEventListener('transitionend', styleTransition);

		if (transition === TRANSITION_STATUS.init) {
			timeOut = setTimeout(setTransition(TRANSITION_STATUS.finished), 10);
		}

		if (transition === TRANSITION_STATUS.finished)
			referenced.current.classList.add('moved');

		if (transition === TRANSITION_STATUS.close)
			referenced.current.classList.remove('moved');

		if (transition === TRANSITION_STATUS.selectedCity)
			referenced.current.classList.remove('moved');

		return () => {
			clearTimeout(timeOut);
			document.removeEventListener('transitionend', styleTransition);
		};
	}, [transition, handleClose, geoLocSetter, geoLocData]);

	// -----------

	const handleSearchCities = (ev) => {
		ev.preventDefault();
		const newSearchCities = ev.target.searchCity.value;
		refreshCities({ cityName: newSearchCities });
	};

	const handleCityButton = ({ cityID }) => {
		const selectedCity = cities.filter((city) => city.id === cityID)[0];
		const { latitude, longitude, timezone, name } = selectedCity;
		// const geoLocData = { name, latitude, longitude, timezone };

		setGeoLocData({ name, latitude, longitude, timezone });

		setTransition(TRANSITION_STATUS.selectedCity);
		// geoLocSetter(geoLocData);
	};

	const buttonsToRender = cities.map((city) => (
		<button
			className='cityButton'
			type='button'
			key={city.id}
			onClick={() => {
				handleCityButton({ cityID: city.id });
			}}
		>
			<span className='cityButton__name'>{city.name}</span>
			<span className='cityButton__country'>
				{`${city.admin1} ${city.country}`}{' '}
			</span>
		</button>
	));

	return (
		<div className='searchDialog' ref={referenced}>
			<button
				className='searchDialog__closeButton'
				type='button'
				onClick={() => setTransition(TRANSITION_STATUS.close)}
			>
				X
			</button>
			<SearchBar onClick={handleSearchCities} />
			{!!cities.length && !searching && (
				<section className='citiesContainer'>{buttonsToRender}</section>
			)}
			{searching && (
				<Spinner
					width='3rem'
					height='3rem'
					backgroundColor='transparent'
					borderWidth='4px'
					borderStyle='solid'
					spinnerColor='var(--medium-gray)'
					spinnerCursorColor='var(--light-blue)'
				/>
			)}
		</div>
	);
};
