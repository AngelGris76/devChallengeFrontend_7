import './Spinner.css';

export const Spinner = ({ ...props }) => {
	const styled = {
		...props,
		borderTopColor: props.spinnerColor,
		borderLeftColor: props.spinnerColor,
		borderBottomColor: props.spinnerColor,
		borderRightColor: props.spinnerCursorColor,
		borderRadius: '50%',
	};

	return <div className='spinner' style={styled}></div>;
};
