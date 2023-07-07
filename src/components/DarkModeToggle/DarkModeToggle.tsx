import React from 'react';

import SvgMoon from '../../svg/SvgMoon';
import SvgSun from '../../svg/SvgSun';

const DarkModeToggle = ({ isdarkMode, onClick }: DarkModeToggleTypes) => (
	<button onClick={onClick}>{isdarkMode ? <SvgMoon /> : <SvgSun />}</button>
);

type DarkModeToggleTypes = {
	isdarkMode: boolean;
	onClick: () => void;
};

export default DarkModeToggle;
