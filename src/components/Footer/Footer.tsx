import React from 'react';

import { useLocation } from 'react-router-dom';

import BackButton from './BackButton/BackButton';
import ScrollToTopButton from './ScrollToTopButton/ScrollToTopButton';

const Footer = () => {
	const location = useLocation();

	const isRootPath = location.pathname === '/';

	return (
		<footer>
			<div
				className="max-container"
				style={{
					justifyContent: isRootPath ? 'flex-end' : 'space-between',
					...footerStyle,
				}}
			>
				{!isRootPath && <BackButton />}
				<ScrollToTopButton />
			</div>
		</footer>
	);
};

const footerStyle: React.CSSProperties = {
	alignItems: 'center',
	display: 'flex',
	margin: '0 auto',
};

export default Footer;
