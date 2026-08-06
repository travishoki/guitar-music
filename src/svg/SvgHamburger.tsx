import React from 'react';

const SvgHamburger = ({ style }: SvgHamburgerTypes) => (
	<svg style={style} viewBox="0 0 512 512">
		<path d="M64,128h384v48H64V128z M64,232h384v48H64V232z M64,336h384v48H64V336z" />
	</svg>
);

type SvgHamburgerTypes = {
	style?: React.CSSProperties;
};

export default SvgHamburger;
