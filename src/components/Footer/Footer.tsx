import React from 'react';

import { useLocation } from 'react-router-dom';

import BackButton from './BackButton/BackButton';
import ScrollToTopButton from './ScrollToTopButton/ScrollToTopButton';
import TabsButton from './TabsButton/TabsButton';

const Footer = () => {
	const location = useLocation();

	const isRootPath = location.pathname === '/';

	return (
		<footer>
			<div className="max-container" style={footerStyle}>
				<div style={leftSlotStyle}>{!isRootPath && <BackButton />}</div>
				<div style={centerSlotStyle}>
					<TabsButton />
				</div>
				<div style={rightSlotStyle}>
					<ScrollToTopButton />
				</div>
			</div>
		</footer>
	);
};

const footerStyle: React.CSSProperties = {
	alignItems: 'stretch',
	display: 'flex',
	margin: '0 auto',
};

const leftSlotStyle: React.CSSProperties = {
	alignItems: 'center',
	display: 'flex',
	flex: 1,
	justifyContent: 'flex-start',
};

const centerSlotStyle: React.CSSProperties = {
	alignItems: 'center',
	display: 'flex',
	flex: 1,
	justifyContent: 'center',
};

const rightSlotStyle: React.CSSProperties = {
	alignItems: 'center',
	display: 'flex',
	flex: 1,
	justifyContent: 'flex-end',
};

export default Footer;
