export const getWindDirectionMnemonic = (data) => {
	if (data <= 1 || data >= 359) return 'N';
	if (data > 1 && data < 44) return 'NNE';
	if (data >= 44 && data <= 46) return 'NE';
	if (data > 46 && data < 89) return 'ENE';
	if (data >= 89 && data <= 91) return 'E';
	if (data > 91 && data < 134) return 'ESE';
	if (data >= 134 && data <= 136) return 'SE';
	if (data > 136 && data < 179) return 'SSE';
	if (data >= 179 && data <= 181) return 'S';
	if (data > 181 && data < 224) return 'SSW';
	if (data >= 224 && data <= 226) return 'SW';
	if (data > 226 && data < 269) return 'WSW';
	if (data >= 269 && data <= 271) return 'W';
	if (data > 271 && data < 314) return 'WNW';
	if (data >= 314 && data <= 316) return 'NW';
	if (data > 316 && data < 359) return 'NNW';
};

/*
0   north
    north northEast
45  nortEast
    east northEast
90  east
    east southEasth
135 southEast
    south southEast
180 south
    soutn southWeast
225 southWeast
    weast southWeast
270 weast
    weast northWeast
315 northWeast
    north northWeast
*/
