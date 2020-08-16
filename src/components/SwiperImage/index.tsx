/* eslint-disable */

import React, { Component, useState, useCallback, useReducer, useEffect } from 'react';

import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';


const arr = [
	require('../../assets/img/1.jpg'),
	require('../../assets/img/2.jpg'),
	require('../../assets/img/3.jpg'),
	require('../../assets/img/4.jpg')
]

function reducer(state: any, action: any) {
	switch(action.type) {
		case 'one':
			return {
				image: require('../../assets/img/1.jpg'),
				bool: false
			};
		case 'two':
			return {
				image: require('../../assets/img/2.jpg'),
				bool: false
			}
		case 'three':
			return {
				image: require('../../assets/img/3.jpg'),
				bool: false
			};
		case 'four':
			return {
				image: require('../../assets/img/4.jpg'),
				bool: false
		 }
		case 'five':
			return {
				image: require('../../assets/img/5.jpg'),
				bool: false
		 };
		default: {
			return state;
		}
	}
}

// class Inde extends Components

// componentDidMount() {}
// componentDidUnMount() {}

const index = () => {
	const [value, setValue] = useState<boolean>(false);
	const [state, dispatch] = useReducer(reducer, { image: require('../../assets/img/1.jpg'), bool: false });

	const setPlaySlides = useCallback(() => {
		setValue(!value);
	}, [value, state.bool]);

		return (
			<S.Container>
				<S.ImageBackground image={state?.image}>
					<S.Swiper>
						<S.PlayButton onClick={setPlaySlides}>
							<FontAwesomeIcon icon={value ? faPauseCircle : faPlayCircle} size="lg" color="#5F75AA" />
						</S.PlayButton>
						<S.StepButton onClick={() => dispatch({ type: 'one' })}/>
						<S.StepButton onClick={() => dispatch({ type: 'two' })}/>
						<S.StepButton onClick={() => dispatch({ type: 'three' })}/>
						<S.StepButton onClick={() => dispatch({ type: 'four' })}/>
						<S.StepButton onClick={() => dispatch({ type: 'five' })}/>
					</S.Swiper>
				</S.ImageBackground>
			</S.Container>
		)
	}

export default index;
