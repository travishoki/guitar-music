import React from 'react';

import ButtonContainer from '../common/ButtonContainer/ButtonContainer';

const SideSCrollSelector = ({
	currentOption,
	list,
	onClick,
}: SideSCrollSelectorTypes) => (
	<ButtonContainer scrollable>
		{list.map((option) => (
			<button
				className={option === currentOption ? 'active' : ''}
				key={option}
				onClick={() => onClick(option)}
			>
				{option}
			</button>
		))}
	</ButtonContainer>
);

type SideSCrollSelectorTypes = {
	currentOption: string;
	list: string[];
	onClick: (option: string) => void;
};

export default SideSCrollSelector;
