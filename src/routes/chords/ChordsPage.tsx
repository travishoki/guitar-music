import React from 'react';

import ChordCard from './ChordCard/ChordCard';
import { ChordList } from '../../const/ChordList';

const ChordsPage = () => (
	<div style={gridStyle}>
		{ChordList.map((chord) => (
			<ChordCard key={chord.title} src={chord.url} title={chord.title} />
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
