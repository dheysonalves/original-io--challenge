/* eslint-disable */

import React from 'react';

import * as S from './styles';

import Swiper from '../SwiperImage';
import Circle from '../ColorsSwitch';

const index = () => {
	return (
		<S.Container>
			<S.TextTitle>
				Rasteira Tira Dedo
			</S.TextTitle>
			<S.Subtitle>
				RT 0568 | 03.07.0653
			</S.Subtitle>
			<Swiper />
			<Circle color="#ff6100"/>
		</S.Container>
	);
}

export default index;
