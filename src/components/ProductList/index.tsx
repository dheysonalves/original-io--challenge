import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
			<S.PaginationContainer>
				<FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" color="#2A5A75" style={{ marginRight: 10}}/>
				<Title size={14} label="1 de 10" color="#2A5A75" transform="none" />
				<FontAwesomeIcon icon={faArrowAltCircleRight} size="lg" color="#2A5A75" style={{ marginLeft: 10 }}/>
			</S.PaginationContainer>
		</div>
	);
}

export default index;
