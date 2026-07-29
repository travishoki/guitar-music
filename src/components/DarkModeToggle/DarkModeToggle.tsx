import React from 'react';

import SvgMoon from '~svg/SvgMoon';
import SvgSun from '~svg/SvgSun';

const DarkModeToggle = ({ isdarkMode, onClick }: DarkModeToggleTypes) => (
	<button onClick={onClick} title="Dark Mode">
		{isdarkMode ? <SvgMoon /> : <SvgSun />}
	</button>
);

type DarkModeToggleTypes = {
	isdarkMode: boolean;
	onClick: () => void;
};

export default DarkModeToggle;
