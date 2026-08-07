import React from 'react';

import SvgBarGraph from '~svg/SvgBarGraph';

import SongHeading from './SongHeading';
import Chip from '../../../../components/common/Chip/Chip';
import DifficultyBar from '../../../../components/common/DifficultyBar/DifficultyBar';
import GuitarTabLink from '../../../../components/common/GuitarTabLink';
import { SongType } from '../../../../types';

const SongRow = ({ isGuitarMode, song }: SongRowTypes) => (
	<div
		className="bottom-border"
		style={{ ...rowStyle, paddingLeft: isGuitarMode ? 25 : 10 }}
	>
		{isGuitarMode && <DifficultyBar difficulty={song.difficulty} />}

		<div style={firstColumnStyle}>
			<SongHeading isGuitarMode={isGuitarMode} song={song} />

			{isGuitarMode && (
				<>
					{song.strumPattern && (
						<p style={strumpatternStyle}>{song.strumPattern}</p>
					)}
					{song.capo && (
						<div style={chipRowStyle}>
							<Chip title={song.capo} />
						</div>
					)}
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
	// Anchor for the absolutely-positioned DifficultyBar down the left edge.
	position: 'relative',
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
