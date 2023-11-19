import { Arrow } from './icons/Arrow';
import './HighLightCard.css';

export const HighLightCard = ({ data, ...props }) => {
	const windDirection = props.windDirection;

	return (
		<section>
			<p>{data}</p>
			{windDirection && (
				<p className='windDirection'>
					<span
						className='windArrow'
						style={{ transform: `rotateZ(${windDirection}deg)` }}
					>
						<Arrow width='80%' height='80%' />
					</span>
					<span>{windDirection}</span>
				</p>
			)}
		</section>
	);
};
