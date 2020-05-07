import styled from 'styled-components';

export const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const Circle = styled.div`
	width: 30px;
	height: 30px;
	border: 2px solid #363636;
	background-color: ${props => props.color};
	border-radius: 20px;
`;

export const Button = styled.button`
	background-color: transparent;
	border: 0px solid transparent;
	width: 30px;
	height: 30px;
	cursor: pointer;
	border-radius: 20px;
	margin-right: 10px;
`;

export const Title = styled.h1`
	font-family: Montserrat, 'sans-serif';
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 23px;
	color: #202020;
`;
