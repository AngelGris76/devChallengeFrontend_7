import { useEffect, useRef, useState } from 'react';

const TRANSITION_STATUS = {
	init: 'transitionInit',
	finished: 'transitionFinished',
	close: 'windowClose',
	selectedCity: 'changeCity',
};

export const useCSSTransition = (handleClose, geoLocSetter) => {
	const [transition, setTransition] = useState(TRANSITION_STATUS.init);
	const [geoLocData, setGeoLocData] = useState({});
	const referenced = useRef();

	const closeSearch = () => {
		setTransition(TRANSITION_STATUS.close);
	};

	const selectCity = (newData) => {
		setGeoLocData(newData);
		setTransition(TRANSITION_STATUS.selectedCity);
	};

	useEffect(() => {
		const styleTransition = (ev) => {
			if (
				ev.target === referenced.current &&
				transition === TRANSITION_STATUS.close
			)
				handleClose();
			else {
				if (
					ev.target === referenced.current &&
					transition === TRANSITION_STATUS.selectedCity
				)
					geoLocSetter(geoLocData);
			}
		};

		let timeOut;

		document.addEventListener('transitionend', styleTransition);

		if (transition === TRANSITION_STATUS.init) {
			timeOut = setTimeout(setTransition(TRANSITION_STATUS.finished), 10);
		}

		if (transition === TRANSITION_STATUS.finished)
			referenced.current.classList.add('moved');

		if (transition === TRANSITION_STATUS.close)
			referenced.current.classList.remove('moved');

		if (transition === TRANSITION_STATUS.selectedCity)
			referenced.current.classList.remove('moved');

		return () => {
			clearTimeout(timeOut);
			document.removeEventListener('transitionend', styleTransition);
		};
	}, [transition, handleClose, geoLocSetter, geoLocData]);

	return { referenced, closeSearch, selectCity };
};
