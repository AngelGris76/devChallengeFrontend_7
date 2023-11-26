import { useCities } from '../hooks/useCities';
import { SearchBar } from './SearchBar';
import { Spinner } from './Spinner';
import './SearchSection.css';

export const SearchSection = ({ handleClose, geoLocSetter }) => {
	const { cities, searching, refreshCities } = useCities();

	const handleSearchCities = (ev) => {
		ev.preventDefault();
		const newSearchCities = ev.target.searchCity.value;
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
		<div className='searchDialog'>
			<button
				className='searchDialog__closeButton'
				type='button'
				onClick={handleClose}
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
