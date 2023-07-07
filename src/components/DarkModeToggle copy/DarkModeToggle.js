import React from 'react';

import SvgMoon from '../../svg/SvgMoon';
import SvgSun from '../../svg/SvgSun';

const DarkModeToggle = ({ isdarkMode, onToggleIsDarkMode }) => (
	<button onClick={onToggleIsDarkMode}>
		{isdarkMode ? <SvgMoon /> : <SvgSun />}
	</button>
);

export default DarkModeToggle;
