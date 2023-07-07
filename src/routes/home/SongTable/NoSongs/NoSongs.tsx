import React from 'react';

import SvgEmojiDizzy from '../../../../svg/SvgEmojiDizzy';

const NoSongs = () => {
	const titleStyle: React.CSSProperties = {
		fontSize: 24,
	};

	const containerStyle: React.CSSProperties = {
		textAlign: 'center',
	};

	const iconstyle: React.CSSProperties = {
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
				Travis&apos; musical capabilities!
			</p>
		</div>
	);
};

export default NoSongs;
