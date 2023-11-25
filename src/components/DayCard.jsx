import { WEATHER_CODES } from '../values/weatherCodes';
import './DayCard.css';

export const DayCard = ({ dayInfo }) => {
	const today = Date.now();
	const actualDay = Date.parse(`${dayInfo.date}T00:00`);

	console.log(dayInfo.weatherCode);

	const Icon = WEATHER_CODES[dayInfo.weatherCode].icon;

	// miliseconds in one hour
	const hours = 3600000;

	const diff = (actualDay - today) / hours;

	let stringDate;

	if (diff <= 24) stringDate = 'Tomorrow';
	else stringDate = new Date(actualDay).toUTCString().slice(0, 11);

	return (
		<section className='dayCard'>
			<p>{stringDate}</p>
			<Icon width='5rem' height='5rem' />
			<p className='dayCard__temp'>
				<span>{dayInfo.maxTemp}°C</span>
				<span className='dayCard__minTemp'>{dayInfo.minTemp}°C</span>
			</p>
		</section>
	);
};
