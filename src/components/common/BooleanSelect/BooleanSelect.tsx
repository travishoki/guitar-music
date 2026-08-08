import React from 'react';

import Select from '../Select/Select';

// A two-option Select backed by a boolean: picking the "on" option enables it
// and the "off" option disables it, both via a single toggle handler.
const BooleanSelect = ({
	icons,
	label,
	offOption,
	onOption,
	onToggle,
	title,
	value,
}: BooleanSelectTypes) => {
	const handleClick = (option: string) => {
		if ((option === onOption) !== value) onToggle();
	};

	return (
		<Select
			currentOption={value ? onOption : offOption}
			icons={icons}
			label={label}
			list={[onOption, offOption]}
			onClick={handleClick}
			title={title}
		/>
	);
};

type BooleanSelectTypes = {
	icons?: { [option: string]: React.ReactNode };
	label: string;
	offOption: string;
	onOption: string;
	onToggle: () => void;
	title: string;
	value: boolean;
};

export default BooleanSelect;
