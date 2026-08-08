import React from 'react';

import Select from '../../../components/common/Select/Select';
import { FILTER_LIST } from '../../../const/filters';

const Genre = ({ currentOption, onClick }: GenreTypes) => (
	<Select
		currentOption={currentOption}
		label="Genre:"
		list={FILTER_LIST}
		onClick={onClick}
		title="Genre"
	/>
);

type GenreTypes = {
	currentOption: string;
	onClick: (option: string) => void;
};

export default Genre;
