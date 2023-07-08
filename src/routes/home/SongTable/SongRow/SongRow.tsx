import React from 'react';

import { Link } from 'react-router-dom';

import SvgBarGraph from '~svg/SvgBarGraph';

import { fixUrlTitle } from './helpers';
import GuitarTabLink from '../../../../components/common/GuitarTabLink';
import { SongType } from '../../../../types';

const SongRow = ({ isGuitarMode, song }: SongRowTypes) => {
	const rowStyle: React.CSSProperties = {
		display: 'flex',
		justifyContent: 'space-between',
		padding: 10,
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

	const iconBarGraph: React.CSSProperties = {
		height: 20,
		width: 20,
	};

	const rightSectionStyle: React.CSSProperties = {
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'flex-end',
		width: 60,
	};

	return (
		<div className="bottom-border" style={rowStyle}>
			<Link style={linkStyle} to={'/song/' + fixUrlTitle(song.title)}>
				<p className="title-font" style={titleStyle}>
					{song.title}
				</p>
				<p className="secondary-text-color" style={artistStyle}>
					{song.artist}
				</p>
			</Link>
			{isGuitarMode && (
				<div style={rightSectionStyle}>
					{song.alteration && <p>{song.alteration}</p>}
					{song.strumPattern && <p>{song.strumPattern}</p>}
					{song.barChords && <SvgBarGraph style={iconBarGraph} />}
					<GuitarTabLink song={song} />
				</div>
			)}
		</div>
	);
};

type SongRowTypes = {
	isGuitarMode: boolean;
	song: SongType;
};

export default SongRow;
