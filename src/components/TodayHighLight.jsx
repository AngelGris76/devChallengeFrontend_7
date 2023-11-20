import { HighLightCard } from './HighLightCard';
import './TodayHighLight.css';

export const TodayHighLight = ({ todayWeather }) => {
	return (
		<article className='highLightArticle'>
			<h2>Today&lsquo;s Hightlights</h2>
			<div className='highLightContainer'>
				<HighLightCard
					data={todayWeather.wind_speed_10m}
					title='Wind Status'
					kind='windStatus'
					windDirection={todayWeather.wind_direction_10m}
				/>
				<HighLightCard
					data={todayWeather.relative_humidity_2m}
					title='Humidity'
					kind='humidity'
					humidity
				/>
				<HighLightCard
					data={todayWeather.visibility}
					title='Visibility'
					kind='visibility'
				/>
				<HighLightCard
					data={todayWeather.surface_pressure}
					title='Air pressure'
					kind='airPressure'
				/>
			</div>
		</article>
	);
};
