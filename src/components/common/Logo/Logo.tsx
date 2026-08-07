import React from 'react';

import logo from '../../../images/logo-large.png';

const Logo = ({ isSplash }: LogoTypes) => (
	<img
		alt="Hoki Campfire Songs"
		className={isSplash ? 'logo logo--splash' : 'logo'}
		src={logo}
	/>
);

type LogoTypes = {
	isSplash: boolean;
};

export default Logo;
