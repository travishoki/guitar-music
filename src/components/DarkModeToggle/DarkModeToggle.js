import React from 'react';

import SvgMoon from '../../icons/SvgMoon';
import SvgSun from '../../icons/SvgSun';

const DarkModeToggle = ({ isdarkMode, onClick }) => (
	<button onClick={onClick}>{isdarkMode ? <SvgMoon /> : <SvgSun />}</button>
);

export default DarkModeToggle;
