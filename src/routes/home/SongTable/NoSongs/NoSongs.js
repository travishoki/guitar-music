import React from 'react';
import SvgEmojiDizzy from '../../../../icons/SvgEmojiDizzy';

const NoSongs = () => {
	const titleStyle = {
		fontSize: 24,
	};

	const containerStyle = {
		textAlign: 'center',
	};

	const iconstyle = {
		height: 100,
		width: 100,
	};

	return (
		<div style={containerStyle}>
			<p style={titleStyle}>Calm down with the search parameters!</p>
			<SvgEmojiDizzy style={iconstyle} />
			<p>
				You are asking too much of
				<br />
				Travis' musical capabilities!
			</p>
		</div>
	);
};

export default NoSongs;
