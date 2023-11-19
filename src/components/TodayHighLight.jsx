import { HighLightCard } from './HighLightCard';

export const TodayHighLight = ({ todayWeather }) => {
	return (
		<article>
			<h2>Today&lsquo;s Hightlights</h2>
			<HighLightCard
				data={todayWeather.wind_speed_10m}
				windDirection={todayWeather.wind_direction_10m}
			/>
			<HighLightCard data={todayWeather.relative_humidity_2m} />
			<HighLightCard data={todayWeather.visibility} />
			<HighLightCard data={todayWeather.surface_pressure} />
		</article>
	);
};
