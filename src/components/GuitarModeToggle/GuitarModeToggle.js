import React from 'react';

import SvgGuitar from '../../icons/SvgGuitar';
import SvgMic from '../../icons/SvgMic';

const GuitarModeToggle = ({ isGuitarMode, onClick }) => (
	<button onClick={onClick}>{isGuitarMode ? <SvgGuitar /> : <SvgMic />}</button>
);

export default GuitarModeToggle;
