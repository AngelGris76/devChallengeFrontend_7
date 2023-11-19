import { weatherCodes } from '../values/weatherCodes';
import './DayCard.css';

export const DayCard = ({ dayInfo }) => {
	const today = Date.now();
	const actualDay = Date.parse(`${dayInfo.date}T00:00`);

	const Icon = weatherCodes[dayInfo.weatherCode].icon;

	// miliseconds in one hour
	const hours = 3600000;

	const diff = (actualDay - today) / hours;

	let stringDate;

	if (diff <= 24) stringDate = 'Tomorrow';
	else stringDate = new Date(actualDay).toUTCString().slice(0, 11);

	return (
		<section className='dayCard'>
			<p>{stringDate}</p>
			<Icon width='48' height='48' />
			<p>
				<span>{dayInfo.minTemp}</span>
				<span>{dayInfo.maxTemp}</span>
			</p>
		</section>
	);
};
