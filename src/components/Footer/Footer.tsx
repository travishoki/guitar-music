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
			<div className="max-container" style={footerStyle}>
				<button onClick={onClick}>Scroll to Top</button>
			</div>
		</footer>
	);
};

const footerStyle: React.CSSProperties = {
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'flex-end',
	margin: '0 auto',
};

export default Footer;
