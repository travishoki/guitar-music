import React from 'react';

import { Link, useParams } from 'react-router-dom';

import SvgBackArrow from '~svg/SvgBackArrow';

import GuitarTabLink from '../../components/common/GuitarTabLink';
import { SongList } from '../../const/SongList';
import { fixUrlTitle } from '../home/SongTable/SongRow/helpers';

const SongPage = () => {
	const params = useParams();
	const { title } = params;

	const song = SongList.filter((songListItem) => {
		return fixUrlTitle(songListItem.title) === title;
	})[0];

	const backLinkStyle: React.CSSProperties = {
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'flex-start',
		margin: 0,
		textDecoration: 'none',
	};

	const backIconStyle: React.CSSProperties = {
		height: 20,
		width: 20,
	};

	return (
		<div id="songPage">
			<Link className="back-button" style={backLinkStyle} to="/">
				<SvgBackArrow style={backIconStyle} />
				Back
			</Link>

			<h2>{song.title}</h2>

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
