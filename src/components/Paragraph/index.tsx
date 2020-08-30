import React from 'react';

import * as S from './styles';

type ParagraphProps = {
	align: string,
	transform: string,
	size: number,
	color: string,
	label: string,
	children: string
}

const defaultProps = {
	align: 'center',
	transform: 'none',
	size: 16,
	color: '#7f7f7f',
	label: '',
}

const index = ({ color, size, transform, align, label, children, ...props }: ParagraphProps) => {
	return (
		<S.Paragraph color={color} size={size} transform={transform} align={align} {...props}>
			{label || children}
		</S.Paragraph>
	);
};

index.defaultProps = defaultProps;


export default index;
