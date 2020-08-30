import styled from 'styled-components';

type TitleProps = {
	align: string,
	transform: string,
	size: number,
	color: string,
}

export const Title = styled.h1<TitleProps>`
	font-family: 'Montserrat', sans-serif;
	font-style: normal;
	font-weight: normal;
	line-height: 29px;
	letter-spacing: 1px;
	color: ${props => props.color};
	font-size: ${props => props.size};
	text-align: ${props => props.align};
	text-transform: ${props => props.transform};
	margin: 0;
`;
