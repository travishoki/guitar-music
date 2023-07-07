import React from 'react';

import SvgGuitar from '../../svg/SvgGuitar';
import { SongType } from '../../types';

const GuitarTabLink = ({ song }: GuitarTabLinkTypes) => {
	const { link } = song;

	if (!link) return null;

	const guitarLink = {
		width: 40,
	};

	return (
		<a
			className="guitar-tab-link"
			href={link}
			rel="noreferrer"
			target="_blank"
			title="Go to Guitar Tabs"
		>
			<SvgGuitar style={guitarLink} />
		</a>
	);
};

type GuitarTabLinkTypes = {
	song: SongType;
};

export default GuitarTabLink;
