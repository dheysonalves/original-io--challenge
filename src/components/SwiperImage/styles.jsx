import styled from 'styled-components';

const IMG_WIDTH = 250;
const IMG_HEIGHT = 324;

export const Container = styled.div`
	background-color: #000;
	overflow: hidden;
	position: relative;
	width: ${IMG_WIDTH}px;
	height: ${IMG_HEIGHT}px;
	margin: 0 auto;
`;

export const Swiper = styled.div`
	display: flex;
	overflow-x: visible;
	transition-property: transform;
	will-change: transform;
`;

export const Image = styled.img`
	object-fit: fill;
`;
