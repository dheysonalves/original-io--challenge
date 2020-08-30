/* eslint-disable */

import React from 'react';

import * as S from './styles';
import { Link } from 'react-router-dom';

import Swiper from '../SwiperImage';
import Circle from '../ColorsSwitch';
import Paragraph from '../Paragraph';

const index = () => {
	return (
		<S.Container>
			<S.TextTitle>Rasteira Tira Dedo</S.TextTitle>
			<S.Subtitle>RT 0568 | 03.07.0653</S.Subtitle>
			<Swiper />
			<Circle color="#ff6100" />
			<S.Wrapper>
				<S.SizeSection>
					<Paragraph size={14} color="#202020" align="none" transform="none" >
						Tamanho
			</Paragraph>
					<Link to="/" color="#DE8F75">
						<Paragraph color="#DE8F75" size={14}>Guia de Medidas</Paragraph>
					</Link>
				</S.SizeSection>
				<S.ProductSizeContainer>
					<S.ProductSize>
						20
				</S.ProductSize>
					<S.ProductSize>
						18
				</S.ProductSize>
					<S.ProductSize>
						40
				</S.ProductSize>
					<S.ProductSize>
						60
				</S.ProductSize>
					<S.ProductSize>
						24
				</S.ProductSize>
					<S.ProductSize>
						26
				</S.ProductSize>
					<S.ProductSize>
						28
				</S.ProductSize>
				</S.ProductSizeContainer>
			</S.Wrapper>
		</S.Container>
	);
};

export default index;
