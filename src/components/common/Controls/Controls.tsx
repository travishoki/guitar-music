import React from 'react';

// A themed box holding a row of Control buttons with even gaps. Used for the
// mode-toggle row in the top nav; pass `className` to layer on group-specific
// styling.
const Controls = ({ children, className = '' }: ControlsTypes) => {
	const classNames = ['controls'];

	if (className) {
		classNames.push(className);
	}

	return <div className={classNames.join(' ')}>{children}</div>;
};

type ControlsTypes = {
	children: React.ReactNode;
	className?: string;
};

export default Controls;
