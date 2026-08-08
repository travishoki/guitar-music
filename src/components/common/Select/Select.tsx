import React, { useState } from 'react';

import Control from '../Control/Control';
import Modal from '../Modal/Modal';

// A labelled selector: the current value shows on a button, and tapping it opens
// a modal with the options stacked in a column.
const Select = ({
	currentOption,
	label,
	list,
	onClick,
	title,
}: SelectTypes) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (option: string) => {
		onClick(option);
		setIsOpen(false);
	};

	return (
		<div className="select">
			<span className="select__label">{label}</span>

			<Control onClick={() => setIsOpen(true)}>{currentOption}</Control>

			{isOpen && (
				<Modal onClose={() => setIsOpen(false)} title={title}>
					<div className="select__options">
						{list.map((option) => (
							<Control
								active={option === currentOption}
								key={option}
								onClick={() => handleSelect(option)}
							>
								{option}
							</Control>
						))}
					</div>
				</Modal>
			)}
		</div>
	);
};

type SelectTypes = {
	currentOption: string;
	label: string;
	list: string[];
	onClick: (option: string) => void;
	title: string;
};

export default Select;
