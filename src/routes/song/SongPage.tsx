import React from 'react';

import { Link, useParams } from 'react-router-dom';

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
			<Link className="back-button" to="/">
				Back
			</Link>

			<h1>{song.title}</h1>

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
