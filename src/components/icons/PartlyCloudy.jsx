export const PartlyCloudy = ({ width, height, ...props }) => {
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
					{/*
        <rect
          style={{
            fill: "#62c4ec",
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
						transform='matrix(.21624 0 0 .21624 11.262 -.408)'
						d='M-.53 30.941c0 6.883-5.382 12.463-12.021 12.463-6.64 0-12.021-5.58-12.021-12.463 0-6.883 5.382-12.463 12.02-12.463 6.64 0 12.022 5.58 12.022 12.463z'
						style={{
							fill: '#fae75d',
							fillOpacity: 1,
							stroke: 'none',
						}}
					/>
					<path
						d='M-6.303-5.78c.717 0 1.331.406 1.658.992a1.13 1.13 0 0 1 .677-.227c.586 0 1.061.428 1.061.955 0 .118-.022.23-.066.334.666.268 1.127.875 1.127 1.576 0 .953-.852 1.72-1.91 1.72h-3.82c-1.06 0-1.911-.767-1.911-1.72 0-.754.538-1.39 1.286-1.624 0-.032-.013-.062-.013-.095 0-1.055.856-1.91 1.91-1.91z'
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
