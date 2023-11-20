import { Arrow } from './icons/Arrow';
import { UNITS_CODES } from '../values/unitsCodes';
import { getWindDirectionMnemonic } from '../values/getWindDirectionMnemonic';
import './HighLightCard.css';

export const HighLightCard = ({ data, title, kind, ...props }) => {
	const windDirection = props.windDirection;
	const humidity = props.humidity;
	const windMnemonic = getWindDirectionMnemonic(windDirection);
	const unit = UNITS_CODES[kind];
	const styled = { height: '10rem' };
	const humidityBarPorcentaje = { width: `${data}%` };

	if (windDirection || humidity) {
		styled.height = '12rem';
	}

	return (
		<section className='highLightCard' style={styled}>
			<h2 className='highLightCard__title'>{title}</h2>
			<p className='highLightCard__data'>
				<span className='highLightCard__value'>{data}</span>
				<span className='highLightCard__unit'> {unit}</span>
			</p>
			{humidity && (
				<div className='humidityBar'>
					<div className='humidityBar__value'>
						<span>0</span>
						<span>50</span>
						<span>100</span>
					</div>
					<div className='humidityBar__container'>
						<span
							className='humidityBar__porcentaje'
							style={humidityBarPorcentaje}
						></span>
					</div>
					<span className='humidityBar__unit'>%</span>
				</div>
			)}
			{windDirection && (
				<p className='highLightCard__windDirection'>
					<span
						className='windArrow'
						style={{ transform: `rotateZ(${windDirection}deg)` }}
					>
						<Arrow width='80%' height='80%' />
					</span>
					<span>{windMnemonic}</span>
				</p>
			)}
		</section>
	);
};
