import { DayCard } from './DayCard';
import './ForecastWeather.css';

export const ForecastWeather = ({ forecastWeather }) => {
	const rederedCards = forecastWeather.map((day) => (
		<DayCard key={day.date} dayInfo={day} />
	));

	return (
		<article aria-label='forecast weather' className='forecastWeather'>
			{rederedCards}
		</article>
	);
};
