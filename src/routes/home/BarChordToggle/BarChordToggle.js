import React from 'react';

import SvgBarGraph from '../../../icons/SvgBarGraph';

const BarChordToggle = ({ includesBarChord, onClick }) => (
	<button onClick={onClick}>
		{includesBarChord ? <SvgBarGraph /> : <SvgBarGraph />}
	</button>
);

export default BarChordToggle;
