import React from 'react';

import SideSCrollSelector from '../../../components/SideScrollSelector/SideScrollSelector';
import { SORT_LIST } from '../../../const/sort';

const Sort = ({ currentOption, onClick }: SortTypes) => (
	<SideSCrollSelector
		currentOption={currentOption}
		list={SORT_LIST}
		onClick={onClick}
	/>
);

type SortTypes = {
	currentOption: string;
	onClick: (option: string) => void;
};

export default Sort;
