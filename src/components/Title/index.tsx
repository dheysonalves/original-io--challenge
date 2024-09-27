import React from 'react';

import * as S from './styles';

type TitleProps = {
	align: string,
	transform: string,
	size: number,
	color: string,
	label: string,
	weight: string,
};

const defaultProps = {
	align: 'center',
	transform: 'uppercase',
	size: 16,
	color: '#de8f75',
	label: 'Product',
	weight: 'normal',
};

const index = ({ color, size, transform, align, label, weight, ...props }: TitleProps) => {
	return (
		<S.Title color={color} size={size} transform={transform} align={align} weight={weight} {...props}>
			{label}
		</S.Title>
	);
};

index.defaultProps = defaultProps;


export default index;
