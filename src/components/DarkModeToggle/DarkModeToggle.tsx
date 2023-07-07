import React from 'react';

import SvgMoon from '../../icons/SvgMoon';
import SvgSun from '../../icons/SvgSun';

const DarkModeToggle = ({ isdarkMode, onClick }: DarkModeToggleTypes) => (
	<button onClick={onClick}>{isdarkMode ? <SvgMoon /> : <SvgSun />}</button>
);

type DarkModeToggleTypes = {
	isdarkMode: boolean;
	onClick: () => void;
};

export default DarkModeToggle;
