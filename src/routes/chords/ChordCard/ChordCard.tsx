import React from 'react';

const ChordCard = ({ src, title }: ChordCardTypes) => (
	<div style={cardStyle}>
		<span style={titleStyle}>{title}</span>
		<img alt={title} src={src} style={imageStyle} />
	</div>
);

const cardStyle: React.CSSProperties = {
	alignItems: 'center',
	backgroundColor: '#ffffff',
	borderRadius: 8,
	display: 'flex',
	flexDirection: 'column',
	padding: 8,
};

const imageStyle: React.CSSProperties = {
	display: 'block',
	height: 'auto',
	maxWidth: '100%',
};

const titleStyle: React.CSSProperties = {
	color: '#000000',
	fontSize: 24,
	fontWeight: 700,
};

type ChordCardTypes = {
	src: string;
	title: string;
};

export default ChordCard;
