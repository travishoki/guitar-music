import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import Title from './Title/Title';
import { SongList } from '../../const/SongList';
import { fixUrlTitle } from '../home/SongTable/SongRow/helpers';

const SongPage = () => {
	const params = useParams();
	const { title } = params;

	useEffect(() => {
		// Start with page scrolled to top
		window.scrollTo(0, 0);
	}, []);

	const song = SongList.filter((songListItem) => {
		return fixUrlTitle(songListItem.title) === title;
	})[0];

	return (
		<div id="songPage">
			<Title artist={song.artist} title={song.title} />
			<div className="page-content">
				{song.lyrics.length > 0 && (
					<div className="lyrics">
						<p>
							{song.lyrics.map((line, index) => (
								<React.Fragment key={index}>
									{line}
									<br />
								</React.Fragment>
							))}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default SongPage;
