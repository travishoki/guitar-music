import React from 'react';

import SideScrollSelector from '../../../components/SideScrollSelector/SideScrollSelector';
import { DIFFICULTY_FILTER_LIST } from '../../../const/difficulty';

const Difficulty = ({ currentOption, onClick }: DifficultyTypes) => (
	<SideScrollSelector
		currentOption={currentOption}
		list={DIFFICULTY_FILTER_LIST}
		onClick={onClick}
	/>
);

type DifficultyTypes = {
	currentOption: string;
	onClick: (option: string) => void;
};

export default Difficulty;
