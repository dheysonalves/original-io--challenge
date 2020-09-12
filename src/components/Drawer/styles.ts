import styled from 'styled-components';

interface SlideProps {
	transformStyle?: any;
};

export const SlideDrawer = styled.div<SlideProps>`
	height: 100%;
	background-color: #fff;
	position: fixed;
	top: 0;
	right: 0;
	width: 100%;
	z-index: 10;
	box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
	transition: transform 0.3s ease-out;
`;
