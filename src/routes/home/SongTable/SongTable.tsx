import React from 'react';

import { sortBy } from 'lodash';

import NoSongs from './NoSongs/NoSongs';
import SongRow from './SongRow/SongRow';
import { SongList } from '../../../const/SongList';
import { ALL, UNCATEGORIZED } from '../../../const/genres';

const SongTable = ({
	currentGenre,
	currentSortTerm,
	includesBarChord,
	isGuitarMode,
}: SongTableTypes) => {
	let letter: string = null;

	const filteredSongs = SongList.filter(({ barChords, genres }) => {
		if (!includesBarChord && barChords) return false;
		if (currentGenre === ALL) return true;
		if (currentGenre === UNCATEGORIZED) {
			return !genres;
		}
		if (!genres) return false;

		return genres.includes(currentGenre);
	});

	const finalSongsList = sortBy(filteredSongs, currentSortTerm);

	if (finalSongsList.length === 0) {
		return <NoSongs />;
	}

	return (
		<div>
			{finalSongsList.map((song) => {
				const firstLetter = song.title[0];
				let showHeader = false;
				if (firstLetter !== letter) {
					letter = firstLetter;
					showHeader = true;
				}

				return (
					<div key={song.title}>
						{showHeader && (
							<div className="scroll-header" style={letterHeaderStyle}>
								{letter}
							</div>
						)}
						<SongRow isGuitarMode={isGuitarMode} song={song} />
					</div>
				);
			})}
		</div>
	);
};

type SongTableTypes = {
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
	position: 'sticky',
	top: 0,
};

export default SongTable;
