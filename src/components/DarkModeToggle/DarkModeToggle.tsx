import React from 'react';

import SvgMoon from '~svg/SvgMoon';
import SvgSun from '~svg/SvgSun';

import Control from '../common/Control/Control';

const DarkModeToggle = ({ isdarkMode, onClick }: DarkModeToggleTypes) => (
	<Control onClick={onClick} title="Dark Mode">
		{isdarkMode ? <SvgMoon /> : <SvgSun />}
	</Control>
);

type DarkModeToggleTypes = {
	isdarkMode: boolean;
	onClick: () => void;
};

export default DarkModeToggle;
