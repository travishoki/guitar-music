import React from 'react';

// A single button styled for use inside a Controls row (sort/genre options,
// mode toggles, chord filters). Owns the control button styling; `active`
// applies the selected state and any other button props (onClick, title,
// aria-label, type...) pass straight through.
const Control = ({
	active = false,
	children,
	className = '',
	...rest
}: ControlTypes) => {
	const classNames = ['control'];

	if (active) {
		classNames.push('active');
	}

	if (className) {
		classNames.push(className);
	}

	return (
		<button className={classNames.join(' ')} {...rest}>
			{children}
		</button>
	);
};

interface ControlTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	active?: boolean;
}

export default Control;
