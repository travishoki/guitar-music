import React from 'react';

import SvgGuitar from '~svg/SvgGuitar';
import SvgMic from '~svg/SvgMic';

import Control from '../common/Control/Control';

const GuitarModeToggle = ({ isGuitarMode, onClick }: GuitarModeToggleTypes) => (
	<Control onClick={onClick} title="Guitar Mode">
		{isGuitarMode ? <SvgGuitar /> : <SvgMic />}
	</Control>
);

type GuitarModeToggleTypes = {
	isGuitarMode: boolean;
	onClick: () => void;
};

export default GuitarModeToggle;
