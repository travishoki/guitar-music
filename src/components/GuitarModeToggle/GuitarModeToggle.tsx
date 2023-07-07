import React from 'react';

import SvgGuitar from '~svg/SvgGuitar';
import SvgMic from '~svg/SvgMic';

const GuitarModeToggle = ({ isGuitarMode, onClick }: GuitarModeToggleTypes) => (
	<button onClick={onClick}>{isGuitarMode ? <SvgGuitar /> : <SvgMic />}</button>
);

type GuitarModeToggleTypes = {
	isGuitarMode: boolean;
	onClick: () => void;
};

export default GuitarModeToggle;
