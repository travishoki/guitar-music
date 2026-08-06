import React from 'react';

import { useLocation } from 'react-router-dom';

import SvgClose from '~svg/SvgClose';
import SvgHamburger from '~svg/SvgHamburger';

const Header = ({ isNavOpen, onToggleNav }: HeaderTypes) => {
	const location = useLocation();

	// The nav only exists on the home page, so the toggle only belongs there.
	const isRootPath = location.pathname === '/';

	const label = isNavOpen ? 'Collapse filters' : 'Expand filters';

	return (
		<header>
			<h1>Hoki Campfire Songs</h1>

			{isRootPath && (
				<button
					aria-expanded={isNavOpen}
					aria-label={label}
					className="nav-toggle"
					onClick={onToggleNav}
					title={label}
				>
					{isNavOpen ? <SvgClose /> : <SvgHamburger />}
				</button>
			)}
		</header>
	);
};

type HeaderTypes = {
	isNavOpen: boolean;
	onToggleNav: () => void;
};

export default Header;
