import React from 'react';
import { FILTER_LIST } from '../../../const/genres';
import SideSCrollSelector from '../../../components/SideScrollSelector/SideScrollSelector';

const Genre = ({ currentOption, onClick }: GenreTypes) => (
	<SideSCrollSelector
		currentOption={currentOption}
		list={FILTER_LIST}
		onClick={onClick}
	/>
);

type GenreTypes = {
	currentOption: string;
	onClick: (option: string) => void;
};

export default Genre;
