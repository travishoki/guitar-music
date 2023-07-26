import React from 'react';

import ScrollToTopButton from './ScrollToTopButton/ScrollToTopButton';

const Footer = () => (
	<footer>
		<div className="max-container" style={footerStyle}>
			<ScrollToTopButton />
		</div>
	</footer>
);

const footerStyle: React.CSSProperties = {
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'flex-end',
	margin: '0 auto',
};

export default Footer;
