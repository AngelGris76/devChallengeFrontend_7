import { useCities } from '../hooks/useCities';
import { SearchBar } from './SearchBar';
import './SearchSection.css';

export const SearchSection = ({ handleClose, geoLocSetter }) => {
	const { cities, searching, refreshCities } = useCities();

	const handleSearchCities = (ev) => {
		const newSearchCities = ev.target.parentElement.firstChild.value;
		refreshCities({ cityName: newSearchCities });
	};

	const handleCityButton = ({ cityID }) => {
		const selectedCity = cities.filter((city) => city.id === cityID)[0];
		const { latitude, longitude, timezone, name } = selectedCity;
		const geoLocData = { name, latitude, longitude, timezone };

		geoLocSetter(geoLocData);
	};

	const buttonsToRender = cities.map((city) => (
		<button
			type='button'
			key={city.id}
			onClick={() => {
				handleCityButton({ cityID: city.id });
			}}
		>
			<span>{city.name}</span>
			<span>{`${city.admin1} ${city.country}`} </span>
		</button>
	));

	return (
		<div className='searchDialog'>
			<button
				className='searchDialog__closeButton'
				type='button'
				onClick={handleClose}
			>
				X
			</button>
			<SearchBar onClick={handleSearchCities} />

			{cities.length && !searching && <section>{buttonsToRender}</section>}
			{searching && <p className='searchingSnipet'>Searching cities...</p>}
		</div>
	);
};
