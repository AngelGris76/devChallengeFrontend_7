import { useState } from 'react';
import { useWeather } from './hooks/useWeather';
import { SearchSection } from './components/SearchSection';
import { ForecastWeather } from './components/ForecastWeather';
import { CurrentWeather } from './components/CurrentWeather';
import { TodayHighLight } from './components/TodayHighLight';
import './App.css';

const App = () => {
	const [showSearch, setShowSearch] = useState(false);
	const { city, weather, setWeather, setGeoLoc } = useWeather();

	const handleSearchClick = () => {
		setShowSearch(true);
	};

	const handleClose = () => {
		setShowSearch(false);
	};

	const forecastWeather = getListWeather({ weather });
	const todayWeather = weather.info?.current || {};

	// console.log(forecastWeather);

	return (
		<main className='mainContainer'>
			<header className='header'>
				<button type='button' onClick={handleSearchClick}>
					Search for places
				</button>
			</header>
			{showSearch && (
				<SearchSection
					handleClose={handleClose}
					geoLocSetter={(geoLocData) => {
						setGeoLoc(geoLocData);
						setWeather((prevValue) => ({ ...prevValue, searching: true }));
						setShowSearch(false);
					}}
				/>
			)}
			{weather.searching ? (
				<p>searching weather...</p>
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
