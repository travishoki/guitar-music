import React from 'react';

// A themed box holding a row of buttons with even gaps - the shared container
// for the control groups at the top of the home page (sort, genre, mode
// toggles) and the chord filters. Pass `scrollable` for groups that can
// overflow horizontally; pass `className` to layer on group-specific styling.
const ButtonContainer = ({
	children,
	className = '',
	scrollable = false,
}: ButtonContainerTypes) => {
	const classNames = ['button-container'];

	if (scrollable) {
		classNames.push('button-container--scrollable');
	}

	if (className) {
		classNames.push(className);
	}

	return <div className={classNames.join(' ')}>{children}</div>;
};

type ButtonContainerTypes = {
	children: React.ReactNode;
	className?: string;
	scrollable?: boolean;
};

export default ButtonContainer;
