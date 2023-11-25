export const Fog = ({ width, height, ...props }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={48}
			viewBox='0 0 13.547 13.547'
			height={48}
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
					{/*
        <rect
          style={{
            fill: "#264e7a",
            fillOpacity: 1,
            stroke: "none",
          }}
          height={11.853}
          rx={5.927}
          y={0.847}
          x={0.847}
          width={11.853}
        />
        */}
					<path
						d='M2.673 6.832c.801-.581 1.86-.793 2.822-.564.988.234 1.835.894 2.823 1.128a3.497 3.497 0 0 0 2.822-.564M2.673 5.139c.801-.582 1.86-.794 2.822-.565.988.235 1.835.894 2.823 1.13a3.497 3.497 0 0 0 2.822-.565M2.673 8.525c.801-.581 1.86-.793 2.822-.564.988.235 1.835.894 2.823 1.129a3.497 3.497 0 0 0 2.822-.565'
						style={{
							fill: 'none',
							stroke: '#fff',
							strokeWidth: '.26642326px',
							strokeLinecap: 'butt',
							strokeLinejoin: 'miter',
							strokeOpacity: 1,
						}}
					/>
				</g>
			</g>
		</svg>
	);
};
