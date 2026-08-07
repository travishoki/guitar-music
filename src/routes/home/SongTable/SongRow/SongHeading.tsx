import React from 'react';

import { Link } from 'react-router-dom';

import { fixUrlTitle } from './helpers';
import { SongType } from '../../../../types';

const SongHeading = ({ isGuitarMode, song }: SongHeadingTypes) => (
	<Link
		style={{
			width: isGuitarMode ? 'auto' : '100%',
			...linkStyle,
		}}
		to={'/song/' + fixUrlTitle(song.title)}
	>
		<p className="title-font" style={titleStyle}>
			{song.title}
		</p>
		<p className="secondary-text-color" style={artistStyle}>
			{song.artist}
		</p>
	</Link>
);

type SongHeadingTypes = {
	isGuitarMode: boolean;
	song: SongType;
};

const linkStyle: React.CSSProperties = {
	textDecoration: 'none',
};

const titleStyle: React.CSSProperties = {
	fontSize: 20,
	fontWeight: 'bold',
	margin: 0,
	marginBottom: 2,
};

const artistStyle: React.CSSProperties = {
	fontSize: 14,
	margin: 0,
};

export default SongHeading;
