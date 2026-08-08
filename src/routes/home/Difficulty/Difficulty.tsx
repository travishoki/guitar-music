import React, { useState } from 'react';

import Control from '../../../components/common/Control/Control';
import Modal from '../../../components/common/Modal/Modal';
import { DIFFICULTY_FILTER_LIST } from '../../../const/difficulty';

// The difficulty filter as a labelled selector: the current value shows on a
// button, and tapping it opens a modal with the options stacked in a column.
const Difficulty = ({ currentOption, onClick }: DifficultyTypes) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (option: string) => {
		onClick(option);
		setIsOpen(false);
	};

	return (
		<div className="difficulty-select">
			<span className="difficulty-select__label">Difficulty:</span>

			<Control onClick={() => setIsOpen(true)}>{currentOption}</Control>

			{isOpen && (
				<Modal onClose={() => setIsOpen(false)} title="Difficulty">
					<div className="difficulty-select__options">
						{DIFFICULTY_FILTER_LIST.map((option) => (
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

type DifficultyTypes = {
	currentOption: string;
	onClick: (option: string) => void;
};

export default Difficulty;
