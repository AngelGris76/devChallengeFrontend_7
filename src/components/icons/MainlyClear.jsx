export const MainlyClear = ({ width, height, ...props }) => {
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
				style={{
					fillRule: 'evenodd',
				}}
			>
				<g transform='matrix(.8 0 0 .8 1.355 1.355)'>
					<path
						transform='matrix(.308 0 0 .308 10.64 -2.609)'
						d='M-.53 30.941c0 6.883-5.382 12.463-12.021 12.463-6.64 0-12.021-5.58-12.021-12.463 0-6.883 5.382-12.463 12.02-12.463 6.64 0 12.022 5.58 12.022 12.463z'
						style={{
							fill: '#fae75d',
							fillOpacity: 1,
							stroke: 'none',
						}}
					/>
					<path
						d='M-7.591-3.999c.423 0 .787.24.98.586a.668.668 0 0 1 .4-.134c.346 0 .627.253.627.564 0 .07-.014.136-.04.198.394.158.667.517.667.931 0 .563-.504 1.016-1.13 1.016h-2.257c-.625 0-1.129-.453-1.129-1.016 0-.446.318-.822.76-.96 0-.019-.007-.036-.007-.056a1.13 1.13 0 0 1 1.129-1.129z'
						style={{
							fill: '#fff',
							fillRule: 'evenodd',
						}}
						transform='matrix(1.00914 0 0 1.00914 11.95 11.405)'
					/>
				</g>
			</g>
		</svg>
	);
};
