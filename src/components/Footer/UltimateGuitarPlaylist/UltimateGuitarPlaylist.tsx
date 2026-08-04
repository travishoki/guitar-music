import React from 'react';

import { useLocation } from 'react-router-dom';

import SvgUltimateGuitar from '~svg/SvgUltimateGuitar';

const compfirePlaylistLink =
	'https://www.ultimate-guitar.com/user/playlist/shared?h=YBjqHjExTl9w6xbjruJM3aB-';

export const UltimateGuitarPlaylist = () => {
	const location = useLocation();

	// Home page only.
	if (location.pathname !== '/') return null;

	return (
		<a
			className="button"
			href={compfirePlaylistLink}
			rel="noreferrer"
			style={buttonStyle}
			target="_blank"
		>
			<SvgUltimateGuitar style={guitarLink} />
			Playlist
		</a>
	);
};

const buttonStyle: React.CSSProperties = {
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'center',
	textDecoration: 'none',
};

const guitarLink = {
	width: 20,
};
