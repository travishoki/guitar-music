import React from 'react';
import { sortBy } from 'lodash';
import { SongList } from '../../../const/SongList';
import { ALL, UNCATEGORIZED } from '../../../const/genres';
import SongRow from './SongRow/SongRow';
import NoSongs from './NoSongs/NoSongs';

const SongTable = ({
	currentGenre,
	currentSortTerm,
	includesBarChord,
	isGuitarMode,
}) => {
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
			{finalSongsList.map((song) => (
				<SongRow key={song.title} isGuitarMode={isGuitarMode} song={song} />
			))}
		</div>
	);
};

export default SongTable;
