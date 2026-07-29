import React from 'react';

import SvgGuitar from '~svg/SvgGuitar';
import SvgUltimateGuitar from '~svg/SvgUltimateGuitar';

const TabLogo = ({ link, style }: TabLogoProps) => {
	const isUltimateGuitarTab = link.includes('ultimate-guitar.com');

	if (isUltimateGuitarTab) {
		return <SvgUltimateGuitar style={style} />;
	}

	return <SvgGuitar style={style} />;
};

type TabLogoProps = {
	link: string;
	style: React.CSSProperties;
};

export default TabLogo;
