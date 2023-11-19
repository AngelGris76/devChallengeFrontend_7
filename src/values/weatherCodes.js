import { ClearSky } from '../components/icons/ClearSky';
import { MainlyClear } from '../components/icons/MainlyClear';
import { OverCast } from '../components/icons/OverCast';
import { PartlyCloudy } from '../components/icons/PartlyCloudy';
import { RainHeavy } from '../components/icons/RainHeavy';
import { RainLightModerate } from '../components/icons/RainLightModerate';

export const weatherCodes = {
	0: {
		description: 'Clear sky',
		icon: ClearSky,
	},
	1: {
		description: 'Mainly clear',
		icon: MainlyClear,
	},
	2: {
		description: 'Partly cloudy',
		icon: PartlyCloudy,
	},
	3: {
		description: 'Overcast',
		icon: OverCast,
	},
	61: {
		description: 'Rain slight',
		icon: RainLightModerate,
	},
	63: {
		description: 'Rain moderate',
		icon: RainLightModerate,
	},
	65: {
		description: 'Rain heavy intensity',
		icon: RainHeavy,
	},
	80: {
		description: 'Rain showers slight',
		icon: RainLightModerate,
	},
	81: {
		description: 'Rain showers moderate',
		icon: RainLightModerate,
	},
	82: {
		description: 'Rain showers violent',
		icon: RainHeavy,
	},
};
