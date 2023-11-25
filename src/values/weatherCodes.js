import { ClearSky } from '../components/icons/ClearSky';
import { Fog } from '../components/icons/Fog';
import { FreezingDrizzle } from '../components/icons/FreezingDrizzle';
import { MainlyClear } from '../components/icons/MainlyClear';
import { OverCast } from '../components/icons/OverCast';
import { PartlyCloudy } from '../components/icons/PartlyCloudy';
import { RainHeavy } from '../components/icons/RainHeavy';
import { RainLightModerate } from '../components/icons/RainLightModerate';
import { Snow } from '../components/icons/Snow';
import { ThunderStorm } from '../components/icons/ThunderStorm';
import { ThunderStormHeavy } from '../components/icons/ThunderStormHeavy';

export const WEATHER_CODES = {
	0: { description: 'Clear sky', icon: ClearSky },
	1: { description: 'Mainly clear', icon: MainlyClear },
	2: { description: 'Partly cloudy', icon: PartlyCloudy },
	3: { description: 'Overcast', icon: OverCast },
	45: { description: 'Fog', icon: Fog },
	48: { description: 'Depositing rime fog', icon: Fog },
	51: { description: 'Drizzle light', icon: RainLightModerate },
	53: { description: 'Drizzle moderate', icon: RainLightModerate },
	55: { description: 'Drizzle dense intensity', icon: RainLightModerate },
	56: { description: 'Freezing drizzle slight', icon: FreezingDrizzle },
	57: {
		description: 'Freezing drizzle dense intensity',
		icon: FreezingDrizzle,
	},
	61: { description: 'Rain slight', icon: RainLightModerate },
	63: { description: 'Rain moderate', icon: RainLightModerate },
	65: { description: 'Rain heavy intensity', icon: RainHeavy },
	66: { description: 'Freezing rain light', icon: FreezingDrizzle },
	67: { description: 'Freezing rain heavy intensity', icon: FreezingDrizzle },
	71: { description: 'Snow fall slight', icon: Snow },
	73: { description: 'Snow fall moderate', icon: Snow },
	75: { description: 'Snow fall heavy intensity', icon: Snow },
	77: { description: 'Snow grains', icon: Snow },
	80: { description: 'Rain showers slight', icon: RainLightModerate },
	81: { description: 'Rain showers moderate', icon: RainLightModerate },
	82: { description: 'Rain showers violent', icon: RainHeavy },
	85: { description: 'Snow showers slight', icon: Snow },
	86: { description: 'Snow showers heavy', icon: Snow },
	95: { description: 'Thunderstorm slight or moderate', icon: ThunderStorm },
	96: { description: 'Thunderstorm slight hail', icon: ThunderStorm },
	99: { description: 'Thunderstorm heavy hail', icon: ThunderStormHeavy },
};
