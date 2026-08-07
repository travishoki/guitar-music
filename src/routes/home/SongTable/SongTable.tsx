import React, { Fragment } from 'react';

import { sortBy } from 'lodash';

import NoSongs from './NoSongs/NoSongs';
import SongRow from './SongRow/SongRow';
import { SongList } from '../../../const/SongList.const';
import { DECADES } from '../../../const/decades';
import { ALL, UNCATEGORIZED } from '../../../const/filters';

const SongTable = ({
	currentDifficulty,
	currentGenre,
	currentSortTerm,
	includesBarChord,
	isGuitarMode,
}: SongTableTypes) => {
	let letter: string | null = null;

	const filteredSongs = SongList.filter(
		({ barChords, decade, difficulty, genres }) => {
			if (!includesBarChord && barChords) return false;
			if (currentDifficulty !== ALL && difficulty !== currentDifficulty) {
				return false;
			}
			if (currentGenre === ALL) return true;
			if (currentGenre === UNCATEGORIZED) return genres.length === 0;
			if (DECADES.includes(currentGenre)) {
				return decade === currentGenre;
			}

			return genres.includes(currentGenre);
		},
	);

	const finalSongsList = sortBy(filteredSongs, currentSortTerm);

	if (finalSongsList.length === 0) {
		return <NoSongs />;
	}

	return (
		<>
			{finalSongsList.map((song) => {
				const firstLetter =
					currentSortTerm === 'artist' ? song.artist[0] : song.title[0];
				let showHeader = false;

				if (firstLetter !== letter) {
					letter = firstLetter;
					showHeader = true;
				}

				return (
					<Fragment key={song.title}>
						{showHeader && (
							<div className="scroll-header" style={letterHeaderStyle}>
								{letter}
							</div>
						)}
						<SongRow isGuitarMode={isGuitarMode} song={song} />
					</Fragment>
				);
			})}
		</>
	);
};

type SongTableTypes = {
	currentDifficulty: string;
	currentGenre: string;
	currentSortTerm: string;
	includesBarChord: boolean;
	isGuitarMode: boolean;
};

const letterHeaderStyle: React.CSSProperties = {
	fontSize: 30,
	fontWeight: 'bold',
	paddingBottom: 5,
	paddingLeft: 10,
	paddingRight: 10,
	paddingTop: 5,
};

export default SongTable;
