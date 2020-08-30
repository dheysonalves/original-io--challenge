import React from 'react';

import Image from '../Image';
import Paragraph from '../Paragraph';
import Title from '../Title';
import * as S from './styles';

const index = () => {
	return (
		<S.CardContainer>
			<Image src="https://source.unsplash.com/random" width="auto" height="250px" />
			<Title align="none" transform="none" color="#202020" size={12} label="R$ 204,90" />
			<Paragraph size={10} color="#202020" align="none" transform="none">
				Ou 6x de R$ 34,15
			</Paragraph>
		</S.CardContainer>
	);
}

export default index;
