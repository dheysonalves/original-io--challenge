/* eslint-disable */

import React, { Component } from 'react';

import * as S from './styles';

const arr = [
	require('../../assets/img/1.jpg'),
	require('../../assets/img/2.jpg'),
	require('../../assets/img/3.jpg'),
	require('../../assets/img/4.jpg')
]

class index extends Component {


	state = {
		imgs: [
			require('../../assets/img/1.jpg'),
			require('../../assets/img/2.jpg'),
			require('../../assets/img/3.jpg'),
			require('../../assets/img/4.jpg')
		],
		currentIndex: 0,
		movement: 0,
	}

	handleMovement() {

	}


	render() {
		return (
			<div>
				<S.Container>
					{this.state.imgs.map(src => {
						return <S.Image src={src} key={src} width="100%" height="100%" />
					})}
				</S.Container>
			</div>
		);
	}
}

export default index;
