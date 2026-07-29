import React from 'react';

import TabLogo from './TabLogo';
import { SongType } from '../../types';

const GuitarTabLink = ({ song }: GuitarTabLinkTypes) => {
	const { link } = song;

	if (!link) return null;

	return (
		<a
			className="guitar-tab-link"
			href={link}
			rel="noreferrer"
			target="_blank"
			title="Go to Guitar Tabs"
		>
			<TabLogo link={link} style={guitarLink} />
		</a>
	);
};

const guitarLink = {
	width: 40,
};

type GuitarTabLinkTypes = {
	song: SongType;
};

export default GuitarTabLink;
