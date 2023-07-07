import React from 'react';

const SideSCrollSelector = ({
	currentOption,
	list,
	onClick,
}: SideSCrollSelectorTypes) => (
	<div className="side-scroll-selector">
		<ul>
			{list.map((option) => (
				<li key={option}>
					<button
						className={option === currentOption ? 'active' : ''}
						onClick={() => onClick(option)}
					>
						{option}
					</button>
				</li>
			))}
		</ul>
	</div>
);

type SideSCrollSelectorTypes = {
	currentOption: string;
	list: string[];
	onClick: (option: string) => void;
};

export default SideSCrollSelector;
