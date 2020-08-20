/* eslint-disable */

import React, { Component, useState, useCallback, useReducer, useEffect } from 'react';

import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';


const arr = [
	{
		image: require('../../assets/img/1.jpg'),
		bool: true
	},
	{
		image: require('../../assets/img/2.jpg'),
		bool: false
	},
	{
		image: require('../../assets/img/3.jpg'),
		bool: false
	},
	{
		image: require('../../assets/img/4.jpg'),
		bool: false
	},
	{
		image: require('../../assets/img/5.jpg'),
		bool: false
	},
]

function reducer(state: any, action: any) {
	switch (action.type) {
		case 'one':
			return {
				image: require('../../assets/img/1.jpg'),
				bool: true
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

const index = () => {
	const [value, setValue] = useState<boolean>(false);
	const [state, dispatch] = useReducer(reducer, { image: require('../../assets/img/1.jpg'), bool: false });
	const [timeInterval, setTimeInterval] = useState<any>(null);
	const [currentImage, setCurrentImage] = useState<any>(null);

	const filterCurrentImage = arr.filter((item => {
		return item.bool === true;
	}));

	useEffect(() => {
		setCurrentImage(filterCurrentImage);
	}, []);

	console.log(currentImage);

	const setPlaySlides = useCallback(() => {
		try {
			var i: any = 0;
			setValue(!value);
			setInterval(() => {
				arr.map((item, index) => {
					i = next(i + 1, arr.length);
				})
			}, 1000);
		} catch (error) {
			console.log(error);
		}
	}, [value, timeInterval]);

	const stopInterval = useCallback((value) => {
			clearInterval(value);
			setTimeInterval(null);
	}, [value]);

	const next =((index: number, lengthArr: number) => {
		if (index <= lengthArr) return index++;
		if (index === lengthArr + 1) return index = 1;
	});

	return (
		<S.Container>
			<S.ImageBackground image={state?.image}>
				<S.Swiper>
					<S.PlayButton onClick={timeInterval ? setPlaySlides : setPlaySlides}>
						<FontAwesomeIcon icon={value ? faPauseCircle : faPlayCircle} size="lg" color="#5F75AA" />
					</S.PlayButton>
					<S.StepButton onClick={() => dispatch({ type: 'one' })} />
					<S.StepButton onClick={() => dispatch({ type: 'two' })} />
					<S.StepButton onClick={() => dispatch({ type: 'three' })} />
					<S.StepButton onClick={() => dispatch({ type: 'four' })} />
					<S.StepButton onClick={() => dispatch({ type: 'five' })} />
				</S.Swiper>
			</S.ImageBackground>
		</S.Container>
	)
}

export default index;
