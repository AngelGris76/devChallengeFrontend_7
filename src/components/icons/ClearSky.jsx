export const ClearSky = ({ width, height, ...props }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			viewBox='0 0 13.547 13.547'
			height={height}
			{...props}
		>
			<defs>
				<linearGradient id='a'>
					<stop
						style={{
							stopColor: '#729fcf',
							stopOpacity: 1,
						}}
						offset={0}
					/>
					<stop
						style={{
							stopColor: '#729fcf',
							stopOpacity: 0,
						}}
						offset={1}
					/>
				</linearGradient>
				<linearGradient id='b'>
					<stop
						offset={0}
						style={{
							stopColor: '#5dac12',
						}}
					/>
					<stop
						offset={1}
						style={{
							stopColor: '#76c925',
						}}
					/>
				</linearGradient>
				<linearGradient id='c'>
					<stop
						offset={0}
						style={{
							stopColor: '#a2c6ff',
							stopOpacity: 1,
						}}
					/>
					<stop
						offset={1}
						style={{
							stopColor: '#9f7e42',
							stopOpacity: 1,
						}}
					/>
				</linearGradient>
				<linearGradient id='d'>
					<stop
						offset={0}
						style={{
							stopColor: '#8dc5ff',
							stopOpacity: 1,
						}}
					/>
					<stop
						offset={1}
						style={{
							stopColor: '#f2c600',
							stopOpacity: 1,
						}}
					/>
				</linearGradient>
				<linearGradient id='e'>
					<stop
						offset={0}
						style={{
							stopColor: '#a2c6ff',
							stopOpacity: 1,
						}}
					/>
					<stop
						offset={1}
						style={{
							stopColor: '#9f7e42',
							stopOpacity: 1,
						}}
					/>
				</linearGradient>
			</defs>
			<g
				transform='matrix(.8 0 0 .8 1.355 1.355)'
				style={{
					fillRule: 'evenodd',
				}}
			>
				<path
					transform='matrix(.39912 0 0 .38497 11.783 -5.138)'
					d='M-.53 30.941c0 6.883-5.382 12.463-12.021 12.463-6.64 0-12.021-5.58-12.021-12.463 0-6.883 5.382-12.463 12.02-12.463 6.64 0 12.022 5.58 12.022 12.463z'
					style={{
						fill: '#fae75d',
						fillOpacity: 1,
						stroke: 'none',
					}}
				/>
			</g>
		</svg>
	);
};
