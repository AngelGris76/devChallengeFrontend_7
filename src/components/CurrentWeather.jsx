import { weatherCodes } from '../values/weatherCodes';
import './CurrentWeather.css';

export const CurrentWeather = ({ todayWeather, city }) => {
	const today = new Date(todayWeather.time).toUTCString().slice(0, 11);
	const weatherDescription =
		weatherCodes[todayWeather.weather_code].description;
	const Icon = weatherCodes[todayWeather.weather_code].icon;

	return (
		<article className='currentWeather'>
			<p>{city}</p>
			<p>{`Today - ${today}`}</p>
			<p>{weatherDescription}</p>
			<p>
				<span>{todayWeather.temperature_2m}</span>
				<span>°c</span>
			</p>
			<Icon width='100' height='100' />
		</article>
	);
};
