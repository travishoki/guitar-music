import React from 'react';

import { Link } from 'react-router-dom';

const ChordsButton = () => (
	<Link className="button chords-button" style={buttonStyle} to="/chords">
		Chords
	</Link>
);

const buttonStyle: React.CSSProperties = {
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'center',
	textDecoration: 'none',
};

export default ChordsButton;
