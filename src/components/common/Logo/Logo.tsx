import React from 'react';

import { Link } from 'react-router-dom';

import useIsRootPath from '../../../hooks/useIsRootPath';
import logo from '../../../images/logo-large.png';

const Logo = ({ isSplash }: LogoTypes) => {
	const isRootPath = useIsRootPath();

	const image = (
		<img
			alt="Hoki Campfire Songs"
			className={isSplash ? 'logo logo--splash' : 'logo'}
			src={logo}
		/>
	);

	// Off the home page the logo doubles as a link back to it.
	return isRootPath ? (
		image
	) : (
		<Link title="Back to songs" to="/">
			{image}
		</Link>
	);
};

type LogoTypes = {
	isSplash: boolean;
};

export default Logo;
