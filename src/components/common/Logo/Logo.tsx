import React from 'react';

import { Link } from 'react-router-dom';

import useIsRootPath from '../../../hooks/useIsRootPath';
import logo from '../../../images/logo-large.png';

const Logo = ({ isSplash }: LogoTypes) => {
	const isRootPath = useIsRootPath();

	// Always wrap the image in the same Link so the <img> keeps one parent across
	// navigations. Toggling the wrapper would remount the <img> and restart the
	// splash animation on other pages. On the home page the link is inert (we're
	// already there); off it, it goes back home.
	return (
		<Link
			className="logo-link"
			onClick={isRootPath ? (event) => event.preventDefault() : undefined}
			title={isRootPath ? undefined : 'Back to songs'}
			to="/"
		>
			<img
				alt="Hoki Campfire Songs"
				className={isSplash ? 'logo logo--splash' : 'logo'}
				src={logo}
			/>
		</Link>
	);
};

type LogoTypes = {
	isSplash: boolean;
};

export default Logo;
