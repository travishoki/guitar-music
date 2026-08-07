import React from 'react';

import Control from '../common/Control/Control';
import Controls from '../common/Controls/Controls';

const SideSCrollSelector = ({
	currentOption,
	list,
	onClick,
}: SideSCrollSelectorTypes) => (
	<Controls scrollable>
		{list.map((option) => (
			<Control
				active={option === currentOption}
				key={option}
				onClick={() => onClick(option)}
			>
				{option}
			</Control>
		))}
	</Controls>
);

type SideSCrollSelectorTypes = {
	currentOption: string;
	list: string[];
	onClick: (option: string) => void;
};

export default SideSCrollSelector;
