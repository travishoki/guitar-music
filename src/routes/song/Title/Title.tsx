import React from 'react';

const Title = ({ artist, title }: TitleProps) => (
	<div className="body-color" style={containerStyle}>
		<h2 style={h2Style}>{title}</h2>
		<p style={artistStyle}>by {artist}</p>
	</div>
);

type TitleProps = {
	artist: string;
	title: string;
};

const containerStyle: React.CSSProperties = {
	paddingBottom: 15,
	paddingTop: 15,
	position: 'sticky',
	// No sticky nav on this route, so this sits directly under the header.
	top: 'var(--header-height)',
	zIndex: 1,
};

const h2Style: React.CSSProperties = {
	marginBottom: 5,
};

const artistStyle: React.CSSProperties = {
	margin: 0,
	textAlign: 'center',
};

export default Title;
