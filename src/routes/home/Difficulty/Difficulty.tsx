import React from 'react';

import Select from '../../../components/common/Select/Select';
import {
	DIFFICULTY_COLORS,
	DIFFICULTY_FILTER_LIST,
} from '../../../const/difficulty';

const Difficulty = ({ currentOption, onClick }: DifficultyTypes) => (
	<Select
		colors={DIFFICULTY_COLORS}
		currentOption={currentOption}
		label="Difficulty:"
		list={DIFFICULTY_FILTER_LIST}
		onClick={onClick}
		title="Difficulty"
	/>
);

type DifficultyTypes = {
	currentOption: string;
	onClick: (option: string) => void;
};

export default Difficulty;
