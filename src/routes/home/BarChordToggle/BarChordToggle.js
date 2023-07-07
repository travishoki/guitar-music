import React from 'react';

import SvgBarGraph from '../../../svg/SvgBarGraph';

const BarChordToggle = ({ includesBarChord, onClick }) => (
	<button onClick={onClick}>
		{includesBarChord ? <SvgBarGraph /> : <SvgBarGraph />}
	</button>
);

export default BarChordToggle;
