import React from 'react';
import { FILTER_LIST } from '../../../const/genres';
import SideSCrollSelector from '../../../components/SideScrollSelector/SideScrollSelector';

const Genre = ({ currentOption, onClick }) => (
	<SideSCrollSelector
		currentOption={currentOption}
		list={FILTER_LIST}
		onClick={onClick}
	/>
);

export default Genre;
