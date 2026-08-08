import React from 'react';

import Select from '../../../components/common/Select/Select';
import { SORT_LIST } from '../../../const/sort';

const Sort = ({ currentOption, onClick }: SortTypes) => (
	<Select
		currentOption={currentOption}
		label="Sort:"
		list={SORT_LIST}
		onClick={onClick}
		title="Sort"
	/>
);

type SortTypes = {
	currentOption: string;
	onClick: (option: string) => void;
};

export default Sort;
