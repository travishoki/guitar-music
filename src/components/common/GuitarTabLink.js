import React from 'react';
import PropTypes from 'prop-types';

import SvgGuitar from '../../icons/SvgGuitar';

const GuitarTabLink = ({ song }) => {
	const { link } = song;

	if (!link) return null;

	const guitarLink = {
		width: 40,
	};

	return (
		<a
			className="guitar-tab-link"
			href={link}
			target="_blank"
			title="Go to Guitar Tabs"
		>
			<SvgGuitar style={guitarLink} />
		</a>
	);
};

GuitarTabLink.propTypes = {
	song: PropTypes.object.isRequired,
};

export default GuitarTabLink;
