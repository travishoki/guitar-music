import React from 'react';

import ChordCard from './ChordCard/ChordCard';

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
			<ChordCard key={chord.title} src={chord.src} title={chord.title} />
		))}
	</div>
);

const gridStyle: React.CSSProperties = {
	display: 'grid',
	gap: 16,
	gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
	padding: 16,
};

export default ChordsPage;
