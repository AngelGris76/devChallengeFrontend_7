import { weatherCodes } from '../values/weatherCodes';
import './CurrentWeather.css';
import { LocationPin } from './icons/LocationPin';

export const CurrentWeather = ({ todayWeather, city }) => {
	const today = new Date(todayWeather.time).toUTCString().slice(0, 11);
	const weatherDescription =
		weatherCodes[todayWeather.weather_code].description;
	const Icon = weatherCodes[todayWeather.weather_code].icon;

	return (
		<article className='currentWeather'>
			<p className='currentWeather__city'>
				<span>
					<LocationPin width='1.25rem' height='1.25rem' />
				</span>
				<span>{city}</span>
			</p>
			<p className='currentWeather__date'>
				{/*	{`Today - ${today}`} */}
				<span>Today</span>
				<span>-</span>
				<span>{today}</span>
			</p>
			<p className='currentWeather__description'>{weatherDescription}</p>
			<p>
				<span className='currentWeather__temperatureValue'>
					{todayWeather.temperature_2m}
				</span>
				<span className='currentWeather__temperatureUnit'>°C</span>
			</p>
			<Icon width='150px' height='174px' />
		</article>
	);
};
