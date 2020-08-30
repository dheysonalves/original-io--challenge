import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px;
`;

export const TextTitle = styled.h1`
	font-family: 'Montserrat', sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 29px;
	letter-spacing: 1px;
	color: #de8f75;
	text-align: center;
	text-transform: uppercase;
	margin: 0;
`;

export const Subtitle = styled.h3`
	font-family: 'Montserrat', sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 20px;
	text-align: center;
	color: #7f7f7f;
	margin: 0;
`;

export const Image = styled.img`
	width: 250px;
	height: 324px;
	margin: 0 auto;
`;

export const SizeSection = styled.section`
	display: flex;
	justify-content: space-between;
`;

	export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	`;

	export const ProductSizeContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 10px;
	`;

	export const ProductSize = styled.button`
	border: 1px solid #ebebeb;
	outline: none;
	background-color: #ffffff;
	border-radius: 4px;
	color: #2a5a75;
	margin-right: 5px;
	padding: 10px;

	:hover {
		background: #e29d86;
		border-radius: 2px;
		color: #ffffff;
		border: 1px solid #ebebeb;
	}

	:active {
		background: #e29d86;
		border-radius: 2px;
		color: #ffffff;
		border: 1px solid #ebebeb;
	}

	:focus {
		background: #e29d86;
		border-radius: 2px;
		color: #ffffff;
		border: 1px solid #ebebeb;
	}
	`;


