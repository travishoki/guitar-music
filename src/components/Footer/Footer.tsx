import React from 'react';

import { useLocation } from 'react-router-dom';

import BackButton from './BackButton/BackButton';
import ChordsButton from './ChordsButton/ChordsButton';
import ScrollToTopButton from './ScrollToTopButton/ScrollToTopButton';
import TabsButton from './TabsButton/TabsButton';
import { UltimateGuitarPlaylist } from './UltimateGuitarPlaylist/UltimateGuitarPlaylist';

const Footer = ({ isGuitarMode }: FooterTypes) => {
	const location = useLocation();

	const isRootPath = location.pathname === '/';

	const isChordsPage = location.pathname === '/chords';
	const isSongPage = location.pathname.startsWith('/song/');
	const showChordsLink = isGuitarMode && !isChordsPage && !isSongPage;

	return (
		<footer>
			<div className="max-container" style={footerStyle}>
				<div style={leftSlotStyle}>{!isRootPath && <BackButton />}</div>
				<div style={centerSlotStyle}>
					<TabsButton />
					<UltimateGuitarPlaylist />
					{showChordsLink && <ChordsButton />}
				</div>
				<div style={rightSlotStyle}>
					<ScrollToTopButton />
				</div>
			</div>
		</footer>
	);
};

type FooterTypes = {
	isGuitarMode: boolean;
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
	gap: '1px',
	justifyContent: 'center',
};

const rightSlotStyle: React.CSSProperties = {
	alignItems: 'center',
	display: 'flex',
	flex: 1,
	justifyContent: 'flex-end',
};

export default Footer;
