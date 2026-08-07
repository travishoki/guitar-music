import React from 'react';

import { Link } from 'react-router-dom';

import SvgBarGraph from '~svg/SvgBarGraph';

import { fixUrlTitle } from './helpers';
import Chip from '../../../../components/common/Chip/Chip';
import GuitarTabLink from '../../../../components/common/GuitarTabLink';
import { SongType } from '../../../../types';

const SongRow = ({ isGuitarMode, song }: SongRowTypes) => (
	<div className="bottom-border" style={rowStyle}>
		<div style={firstColumnStyle}>
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

			{isGuitarMode && (
				<>
					{song.strumPattern && (
						<p style={strumpatternStyle}>{song.strumPattern}</p>
					)}
					<div style={chipRowStyle}>
						<Chip title={song.difficulty} />
						{song.capo && <Chip title={song.capo} />}
					</div>
				</>
			)}
		</div>

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

const strumpatternStyle: React.CSSProperties = {
	fontSize: 14,
	margin: 0,
	marginTop: 3,
};

const firstColumnStyle: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	gap: 5,
	justifyContent: 'flex-start',
};

const chipRowStyle: React.CSSProperties = {
	alignItems: 'center',
	display: 'flex',
	gap: 10,
	justifyContent: 'flex-start',
};

export default SongRow;
