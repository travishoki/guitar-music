import React from 'react';

import SvgUltimateGuitar from '~svg/SvgUltimateGuitar';

import useIsRootPath from '../../../hooks/useIsRootPath';

const compfirePlaylistLink =
	'https://www.ultimate-guitar.com/user/playlist/shared?h=YBjqHjExTl9w6xbjruJM3aB-';

export const UltimateGuitarPlaylist = () => {
	// Home page only.
	if (!useIsRootPath()) return null;

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
