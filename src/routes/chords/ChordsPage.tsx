import React, { useState } from 'react';

import ChordCard from './ChordCard/ChordCard';
import SideScrollSelector from '../../components/SideScrollSelector/SideScrollSelector';
import { ChordList } from '../../const/ChordList';
import {
	ALL,
	CHORD_FILTER_LIST,
	FLAT,
	MAJOR,
	MINOR,
	SHARP,
} from '../../const/chordFilters';
import { ChordType } from '../../types';

const matchesFilter = (chord: ChordType, filter: string) => {
	switch (filter) {
		case MAJOR:
			return chord.major;
		case MINOR:
			return !chord.major;
		case SHARP:
			return chord.sharp;
		case FLAT:
			return chord.flat;
		default:
			return true;
	}
};

const ChordsPage = () => {
	const [filter, setFilter] = useState(ALL);

	const filteredChords = ChordList.filter((chord) =>
		matchesFilter(chord, filter),
	);

	return (
		<>
			<SideScrollSelector
				currentOption={filter}
				list={CHORD_FILTER_LIST}
				onClick={setFilter}
			/>

			<div style={gridStyle}>
				{filteredChords.map((chord) => (
					<ChordCard key={chord.title} src={chord.url} title={chord.title} />
				))}
			</div>
		</>
	);
};

const gridStyle: React.CSSProperties = {
	display: 'grid',
	gap: 16,
	gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
	padding: 16,
};

export default ChordsPage;
