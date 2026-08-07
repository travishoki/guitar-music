import React from 'react';

import Control from '../common/Control/Control';
import Controls from '../common/Controls/Controls';

const SideSCrollSelector = ({
	currentOption,
	fitContent = false,
	list,
	onClick,
}: SideSCrollSelectorTypes) => (
	<Controls className={fitContent ? 'controls--fit' : ''} scrollable>
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
	// Size to the content and only scroll sideways when it overflows, rather
	// than always stretching the full width.
	fitContent?: boolean;
	list: string[];
	onClick: (option: string) => void;
};

export default SideSCrollSelector;
