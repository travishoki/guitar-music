import React from 'react';

// Glob every chord image at build time so new files in the folder show up
// automatically without needing to be imported one by one.
const chordContext = require.context('../../images/chords', false, /\.png$/);

const chords = chordContext
	.keys()
	.map((key) => {
		const chordModule = chordContext<{ default: string } | string>(key);

		return {
			src: typeof chordModule === 'string' ? chordModule : chordModule.default,
			title: key.replace(/^\.\//, '').replace(/\.png$/, ''),
		};
	})
	.sort((a, b) => a.title.localeCompare(b.title));

const ChordsPage = () => (
	<div style={gridStyle}>
		{chords.map((chord) => (
			<div key={chord.title} style={cardStyle}>
				<span style={titleStyle}>{chord.title}</span>
				<div style={imageWrapperStyle}>
					<img alt={chord.title} src={chord.src} style={imageStyle} />
				</div>
			</div>
		))}
	</div>
);

const gridStyle: React.CSSProperties = {
	display: 'grid',
	gap: 16,
	gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
	padding: 16,
};

const cardStyle: React.CSSProperties = {
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'column',
	gap: 8,
};

const imageWrapperStyle: React.CSSProperties = {
	backgroundColor: '#ffffff',
	borderRadius: 8,
	padding: 8,
};

const imageStyle: React.CSSProperties = {
	display: 'block',
	height: 'auto',
	maxWidth: '100%',
};

const titleStyle: React.CSSProperties = {
	fontWeight: 600,
};

export default ChordsPage;
