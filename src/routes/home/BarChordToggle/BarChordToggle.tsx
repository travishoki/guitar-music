import React from 'react';

import SvgBarGraph from '~svg/SvgBarGraph';

import Control from '../../../components/common/Control/Control';

const BarChordToggle = ({ includesBarChord, onClick }: BarChordToggleTypes) => (
	<Control active={includesBarChord} onClick={onClick} title="Bar Chords">
		<SvgBarGraph />
	</Control>
);

type BarChordToggleTypes = {
	includesBarChord: boolean;
	onClick: () => void;
};

export default BarChordToggle;
