import React from 'react';

const SvgClose = ({ style }: SvgCloseTypes) => (
	<svg style={style} viewBox="0 0 512 512">
		<path d="M436,100l-24-24L256,232L100,76l-24,24l156,156L76,412l24,24l156-156l156,156l24-24L280,256L436,100z" />
	</svg>
);

type SvgCloseTypes = {
	style?: React.CSSProperties;
};

export default SvgClose;
