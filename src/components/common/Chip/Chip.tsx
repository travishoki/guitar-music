import React from 'react';

const Chip = ({ title }: ChipTypes) => <span style={chipStyle}>{title}</span>;

const chipStyle: React.CSSProperties = {
	backgroundColor: 'rgba(128, 128, 128, 0.25)',
	borderRadius: 10,
	fontSize: 11,
	fontWeight: 600,
	padding: '2px 8px',
	whiteSpace: 'nowrap',
};

type ChipTypes = {
	title: string;
};

export default Chip;
