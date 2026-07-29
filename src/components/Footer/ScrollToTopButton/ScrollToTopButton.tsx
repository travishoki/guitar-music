import React, { useEffect, useState } from 'react';

import SvgUpArrow from '~svg/SvgUpArrow';

const ScrollToTopButton = () => {
	const [isAtTop, setIsAtTop] = useState(true);

	useEffect(() => {
		const onScroll = () => {
			setIsAtTop(window.scrollY < 10);
		};

		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const onClick = () => {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		});
	};

	return (
		<button
			disabled={isAtTop}
			onClick={onClick}
			style={{ ...buttonStyle, opacity: isAtTop ? 0.4 : 1 }}
		>
			<SvgUpArrow style={iconStyle} />
			To Top
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
