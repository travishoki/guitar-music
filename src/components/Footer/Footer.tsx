import React from 'react';

import { useLocation } from 'react-router-dom';

import ScrollToTopButton from './ScrollToTopButton/ScrollToTopButton';
import BackButton from '../../routes/song/BackButton/BackButton';

const Footer = () => {
	const location = useLocation();

	const isRootPath = location.pathname === '/';

	return (
		<footer>
			<div className="max-container" style={footerStyle}>
				{!isRootPath && <BackButton />}
				<ScrollToTopButton />
			</div>
		</footer>
	);
};

const footerStyle: React.CSSProperties = {
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'space-between',
	margin: '0 auto',
};

export default Footer;
