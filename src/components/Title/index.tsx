import React from 'react';

import * as S from './styles';

type TitleProps = {
	align: string,
	transform: string,
	size: number,
	color: string,
	label: string,
}

const defaultProps = {
	align: 'center',
	transform: 'uppercase',
	size: 16,
	color: '#de8f75',
	label: 'Product',
}

const index = ({ color, size, transform, align, label, ...props }: TitleProps) => {
	return (
		<S.Title color={color} size={size} transform={transform} align={align} {...props}>
			{label}
		</S.Title>
	);
};

index.defaultProps = defaultProps;


export default index;
