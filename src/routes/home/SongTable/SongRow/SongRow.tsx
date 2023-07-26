import React from 'react';

import { Link } from 'react-router-dom';

import SvgBarGraph from '~svg/SvgBarGraph';

import { fixUrlTitle } from './helpers';
import GuitarTabLink from '../../../../components/common/GuitarTabLink';
import { SongType } from '../../../../types';

const SongRow = ({ isGuitarMode, song }: SongRowTypes) => (
	<div className="bottom-border" style={rowStyle}>
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
			{isGuitarMode && (
				<>
					{song.alteration && <p style={alternateStyle}>{song.alteration}</p>}
					{song.strumPattern && (
						<p style={alternateStyle}>{song.strumPattern}</p>
					)}
				</>
			)}
		</Link>
		{isGuitarMode && (
			<div style={rightSectionStyle}>
				{song.barChords && <SvgBarGraph style={iconBarGraph} />}
				<GuitarTabLink song={song} />
			</div>
		)}
	</div>
);

type SongRowTypes = {
	isGuitarMode: boolean;
	song: SongType;
};

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

const alternateStyle: React.CSSProperties = {
	fontSize: 14,
	margin: 0,
	marginTop: 3,
};

export default SongRow;
