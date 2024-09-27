import styled from 'styled-components';

type TitleProps = {
	align: string,
	transform: string,
	size: number,
	color: string,
	weight: string,
}

export const Title = styled.h1<TitleProps>`
	font-family: 'Montserrat', sans-serif;
	font-style: normal;
	font-weight: ${props => props.weight};
	line-height: 29px;
	letter-spacing: 1px;
	color: ${props => props.color};
	font-size: ${props => props.size + 'px'};
	text-align: ${props => props.align};
	text-transform: ${props => props.transform};
	margin: 0;
`;
