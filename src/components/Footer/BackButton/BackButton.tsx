import React from 'react';

import { Link } from 'react-router-dom';

import SvgBackArrow from '~svg/SvgBackArrow';

const BackButton = () => (
	<Link className="button back-button" style={buttonStyle} to="/">
		<SvgBackArrow style={iconStyle} />
		Back
	</Link>
);

const buttonStyle: React.CSSProperties = {
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'center',
	textDecoration: 'none',
};

const iconStyle: React.CSSProperties = {
	height: 20,
	width: 20,
};

export default BackButton;
