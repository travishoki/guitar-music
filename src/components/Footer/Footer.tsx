import React from 'react';

import SvgUpArrow from '~svg/SvgUpArrow';

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
				<button onClick={onClick} style={buttonStyle}>
					<SvgUpArrow style={iconStyle} />
					Scroll To Top
				</button>
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

const buttonStyle: React.CSSProperties = {
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'center',
};

const iconStyle: React.CSSProperties = {
	height: 20,
	width: 20,
};

export default Footer;
