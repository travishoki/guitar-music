import React from 'react';

import ScrollToTopButton from './ScrollToTopButton/ScrollToTopButton';
import BackButton from '../../routes/song/BackButton/BackButton';

const Footer = () => (
	<footer>
		<div className="max-container" style={footerStyle}>
			<BackButton />
			<ScrollToTopButton />
		</div>
	</footer>
);

const footerStyle: React.CSSProperties = {
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'space-between',
	margin: '0 auto',
};

export default Footer;
