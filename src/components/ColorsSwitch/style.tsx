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
	width: 50%;
`;

export const Button = styled.button`
	background-color: ${props => props.color};
	border: none;
	outline: none;
	cursor: pointer;
	height: auto;
	padding: 15px;
	border-radius: 50%;

	:focus {
		border: 2px solid #363636;
	}
	:active {
		border: 2px solid #363636;
	}
`;

export const Title = styled.h1`
	font-family: Montserrat, 'sans-serif';
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 23px;
	color: #202020;
`;
