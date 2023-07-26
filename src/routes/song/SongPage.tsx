import React from 'react';

import { useParams } from 'react-router-dom';

import Title from './Title/Title';
import GuitarTabLink from '../../components/common/GuitarTabLink';
import { SongList } from '../../const/SongList';
import { fixUrlTitle } from '../home/SongTable/SongRow/helpers';

const SongPage = () => {
	const params = useParams();
	const { title } = params;

	const song = SongList.filter((songListItem) => {
		return fixUrlTitle(songListItem.title) === title;
	})[0];

	return (
		<div id="songPage">
			<Title title={song.title} />

			<p>by {song.artist}</p>

			{song.lyrics && (
				<div className="lyrics">
					<song.lyrics />
				</div>
			)}

			{song.link && (
				<div className="go-to-tabs">
					<GuitarTabLink song={song} />
					<p>Go to tabs</p>
				</div>
			)}
		</div>
	);
};

export default SongPage;
