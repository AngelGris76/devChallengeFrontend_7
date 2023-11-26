import { useState } from 'react';
import { useWeather } from './hooks/useWeather';
import { SearchSection } from './components/SearchSection';
import { ForecastWeather } from './components/ForecastWeather';
import { CurrentWeather } from './components/CurrentWeather';
import { TodayHighLight } from './components/TodayHighLight';
import { Spinner } from './components/Spinner';
import './App.css';

const App = () => {
	const [showSearch, setShowSearch] = useState(false);
	const { city, forecastWeather, todayWeather, searching, loadWeather } =
		useWeather();

	const handleSearchClick = () => {
		setShowSearch(true);
	};

	const handleClose = () => {
		setShowSearch(false);
	};

	return (
		<main className='mainContainer'>
			<header className='header'>
				<button
					className='header__button'
					type='button'
					onClick={handleSearchClick}
				>
					Search for places
				</button>
			</header>
			{showSearch && (
				<SearchSection
					handleClose={handleClose}
					geoLocSetter={(geoLocData) => {
						loadWeather(geoLocData);
						setShowSearch(false);
					}}
				/>
			)}
			{searching ? (
				<div className='spinnerContainer'>
					<Spinner
						width='3rem'
						height='3rem'
						borderWidth='0.25rem'
						borderStyle='solid'
						backgroundColor='transparent'
						spinnerColor='var(--medium-gray)'
						spinnerCursorColor='var(--light-blue)'
					/>
				</div>
			) : (
				<section className='infoContainer'>
					<CurrentWeather todayWeather={todayWeather} city={city} />
					<ForecastWeather forecastWeather={forecastWeather} />
					<TodayHighLight todayWeather={todayWeather} />
				</section>
			)}
		</main>
	);
};

export default App;
