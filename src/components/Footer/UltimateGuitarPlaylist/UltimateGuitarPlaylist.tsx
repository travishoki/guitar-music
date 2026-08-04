import React from 'react';

import SvgUltimateGuitar from '~svg/SvgUltimateGuitar';

const compfirePlaylistLink =
	'https://www.ultimate-guitar.com/user/playlist/shared?h=YBjqHjExTl9w6xbjruJM3aB-';

export const UltimateGuitarPlaylist = () => {
	return (
		<a
			className="button"
			href={compfirePlaylistLink}
			rel="noreferrer"
			style={buttonStyle}
			target="_blank"
		>
			Playlist
			<SvgUltimateGuitar style={guitarLink} />
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
	width: 25,
};
