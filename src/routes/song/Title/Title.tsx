import React from 'react';

const Title = ({ title }: TitleProps) => <h2>{title}</h2>;

type TitleProps = {
	title: string;
};

export default Title;
