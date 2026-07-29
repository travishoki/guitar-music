import React from 'react';

import { useLocation } from 'react-router-dom';

import SvgGuitar from '~svg/SvgGuitar';

import { SongList } from '../../../const/SongList';
import { fixUrlTitle } from '../../../routes/home/SongTable/SongRow/helpers';

const TabsButton = () => {
	const location = useLocation();

	const match = location.pathname.match(/^\/song\/(.+)$/);
	if (!match) return null;

	const song = SongList.find(
		(songListItem) => fixUrlTitle(songListItem.title) === match[1],
	);
	if (!song?.link) return null;

	return (
		<a
			className="button tabs-button"
			href={song.link}
			rel="noreferrer"
			style={buttonStyle}
			target="_blank"
			title="Go to Guitar Tabs"
		>
			<SvgGuitar style={iconStyle} />
			Tabs
		</a>
	);
};

const buttonStyle: React.CSSProperties = {
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'center',
	textDecoration: 'none',
};

const iconStyle: React.CSSProperties = {
	height: 20,
	marginRight: 4,
	width: 20,
};

export default TabsButton;
