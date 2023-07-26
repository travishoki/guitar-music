import React from 'react';

import SvgUpArrow from '~svg/SvgUpArrow';

const ScrollToTopButton = () => {
	const onClick = () => {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		});
	};

	return (
		<button onClick={onClick} style={buttonStyle}>
			<SvgUpArrow style={iconStyle} />
			Scroll To Top
		</button>
	);
};

const buttonStyle: React.CSSProperties = {
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'center',
};

const iconStyle: React.CSSProperties = {
	height: 20,
	width: 20,
};

export default ScrollToTopButton;
