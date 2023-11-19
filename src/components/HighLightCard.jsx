export const HighLightCard = ({ data, ...props }) => {
	const windDirection = props.windDirection;

	return (
		<section>
			<p>{data}</p>
			{windDirection && (
				<p>
					<span>{windDirection}</span>
				</p>
			)}
		</section>
	);
};
