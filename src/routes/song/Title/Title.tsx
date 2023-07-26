import React from 'react';

const Title = ({ title }: TitleProps) => (
	<h2 className="scroll-header" style={titleStyle}>
		{title}
	</h2>
);

type TitleProps = {
	title: string;
};

const titleStyle: React.CSSProperties = {
	position: 'sticky',
	top: 50,
};

export default Title;
