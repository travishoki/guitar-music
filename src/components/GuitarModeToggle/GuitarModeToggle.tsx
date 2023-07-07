import React from 'react';

import SvgGuitar from '../../icons/SvgGuitar';
import SvgMic from '../../icons/SvgMic';

const GuitarModeToggle = ({ isGuitarMode, onClick }: GuitarModeToggleTypes) => (
	<button onClick={onClick}>{isGuitarMode ? <SvgGuitar /> : <SvgMic />}</button>
);

type GuitarModeToggleTypes = {
	isGuitarMode: boolean;
	onClick: () => void;
};

export default GuitarModeToggle;
