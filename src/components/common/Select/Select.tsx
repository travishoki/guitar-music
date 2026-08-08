import React, { useState } from 'react';

import Control from '../Control/Control';
import Modal from '../Modal/Modal';

// A labelled selector: the current value shows on a button, and tapping it opens
// a modal with the options stacked in a column. Pass `colors` (option -> colour)
// to show a coloured dot beside each matching option (e.g. difficulty), or
// `icons` (option -> node) to show an icon beside each (e.g. mode, theme).
const Select = ({
	colors,
	currentOption,
	icons,
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

			<Control onClick={() => setIsOpen(true)}>
				{colors?.[currentOption] && (
					<span
						className="select__dot"
						style={{ backgroundColor: colors[currentOption] }}
					/>
				)}
				{icons?.[currentOption] && (
					<span className="select__icon">{icons[currentOption]}</span>
				)}
				{currentOption}
			</Control>

			{isOpen && (
				<Modal onClose={() => setIsOpen(false)} title={title}>
					<div className="modal-options">
						{list.map((option) => (
							<Control
								active={option === currentOption}
								key={option}
								onClick={() => handleSelect(option)}
							>
								{colors?.[option] && (
									<span
										className="select__dot"
										style={{ backgroundColor: colors[option] }}
									/>
								)}
								{icons?.[option] && (
									<span className="select__icon">{icons[option]}</span>
								)}
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
	colors?: { [option: string]: string };
	currentOption: string;
	icons?: { [option: string]: React.ReactNode };
	label: string;
	list: string[];
	onClick: (option: string) => void;
	title: string;
};

export default Select;
