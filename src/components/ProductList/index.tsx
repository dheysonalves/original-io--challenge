import React from 'react';

import Card from '../Card';
import Title from '../Title';
import * as S from './styles';

const index = () => {
	return (
		<div>
			<Title size={24} label="Quem viu, viu também" />
			<S.CardContainer>
				<Card />
				<Card />
			</S.CardContainer>
		</div>
	);
}

export default index;
