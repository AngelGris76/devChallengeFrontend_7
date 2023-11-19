export const OverCast = ({ width, height, ...props }) => {
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
						d='M6.068 2.903c.855 0 1.588.484 1.977 1.182.22-.164.5-.27.807-.27.699 0 1.266.51 1.266 1.139 0 .141-.027.274-.08.399.796.32 1.346 1.043 1.346 1.88 0 1.135-1.016 2.05-2.279 2.05H4.55c-1.263 0-2.279-.915-2.279-2.05 0-.9.642-1.66 1.535-1.937 0-.039-.016-.075-.016-.114a2.28 2.28 0 0 1 2.279-2.279z'
						style={{
							fill: '#fff',
							fillRule: 'evenodd',
						}}
					/>
				</g>
			</g>
		</svg>
	);
};
