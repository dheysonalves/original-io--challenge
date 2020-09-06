import styled from 'styled-components';

const IMG_WIDTH = 250;
const IMG_HEIGHT = 324;

interface BackgroundProps {
	image?: string;
};

export const Container = styled.div`
	background-color: #0002;
	overflow: hidden;
	width: ${IMG_WIDTH}px;
	height: ${IMG_HEIGHT}px;
	margin: 0 auto;
`;

export const ImageBackground = styled.div<BackgroundProps>`
	background-image: url(${props => props.image});
	position: relative;
	max-width: 100%;
	height: 100%;;
	background-position: center; /* Center the image */
	background-repeat: no-repeat; /* Do not repeat the image */
	background-size: cover; /* Resize the background image to cover the entire container */

	::after {
		content: "";
		background-color: #0002;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
`;

export const Swiper = styled.div`
	position: absolute;
	width: 100%;
	height: auto;
	bottom: 10px;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const PlayButton = styled.button`
	height: auto;
	border: none;
	outline: none;
	background-color: transparent;
	margin: 0;
	padding: 0;
	z-index: 1;
`;

export const StepButton = styled.button`
	background-color: transparent;
	padding: 5px;
	height: auto;
	border-radius: 50%;
	border: none;
	outline: none;
	border: 2px solid #fff;
	z-index: 2;

	:active {
		padding: 6px;
		background-color: #DE8F75;
		border: none;
	}
	:focus {
		padding: 6px;
		background-color: #DE8F75;
		border: none;
	}
`;

export const Image = styled.img`
	object-fit: fill;
`;
