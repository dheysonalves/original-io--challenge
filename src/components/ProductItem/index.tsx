/* eslint-disable */

import React from 'react';

import * as S from './styles';
import { Link } from 'react-router-dom';

import Swiper from '../SwiperImage';
import Circle from '../ColorsSwitch';
import Paragraph from '../Paragraph';
import Button from '../Button';
import Title from '../Title';
import Card from '../Card';

const index = () => {
	return (
		<S.Container>
			<S.TextTitle>Rasteira Tira Dedo</S.TextTitle>
			<S.Subtitle>RT 0568 | 03.07.0653</S.Subtitle>
			<Swiper />
			<Circle color="#ff6100" />
			<S.Wrapper>
				<S.SizeSection>
					<Paragraph size={14} color="#202020" align="none" transform="none">
						Tamanho
			</Paragraph>
					<Link to="/" color="#DE8F75">
						<Paragraph color="#DE8F75" size={14}>
							Guia de Medidas
				</Paragraph>
					</Link>
				</S.SizeSection>
				<S.ProductSizeContainer>
					<S.ProductSize>20</S.ProductSize>
					<S.ProductSize>18</S.ProductSize>
					<S.ProductSize>40</S.ProductSize>
					<S.ProductSize>60</S.ProductSize>
					<S.ProductSize>24</S.ProductSize>
					<S.ProductSize>26</S.ProductSize>
					<S.ProductSize>28</S.ProductSize>
				</S.ProductSizeContainer>
				<S.PriceContainer>
					<S.Price>
						<Paragraph
							size={12}
							color="#E35442"
							align="none"
							transform="none"
							decoration="line-through"
						>
							R$ 69,00
				</Paragraph>
						<Paragraph size={16} color="#686868" align="none" transform="none">
							R$ 55,20
				</Paragraph>
						<Paragraph size={12} color="#7F7F7F" align="none" transform="none">
							Ou 6x de R$ 9,20
				</Paragraph>
					</S.Price>
					<Button />
				</S.PriceContainer>
				<S.DescriptionContainer>
					<Title align="none" size={16} transform="none" />
					<Paragraph size={14} color="#202020" align="none" transform="none">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores architecto distinctio
						officia, numquam voluptatibus obcaecati quia corrupti reiciendis, dolorem quidem sunt
						veniam perferendis voluptatem nulla illo facilis esse magni. Maxime.
			</Paragraph>
				</S.DescriptionContainer>
				<Title size={24} label="Quem viu, viu também" />
				<S.CardContainer>
					<Card />
					<Card />
				</S.CardContainer>
			</S.Wrapper>
		</S.Container>
	);
};

export default index;
