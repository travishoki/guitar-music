import React from 'react';

const Footer = () => {
	const onClick = () => {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		});
	};

	return (
		<footer>
			<button onClick={onClick}>Scroll to Top</button>
		</footer>
	);
};

export default Footer;
