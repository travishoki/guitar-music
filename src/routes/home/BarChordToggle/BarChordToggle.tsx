import React from 'react';

import SvgBarGraph from '~svg/SvgBarGraph';

const BarChordToggle = ({ includesBarChord, onClick }: BarChordToggleTypes) => (
	<button onClick={onClick} title="Bar Chords">
		{includesBarChord ? <SvgBarGraph /> : <SvgBarGraph />}
	</button>
);

type BarChordToggleTypes = {
	includesBarChord: boolean;
	onClick: () => void;
};

export default BarChordToggle;
