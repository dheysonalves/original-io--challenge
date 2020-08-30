import styled from 'styled-components';

type ParagraphProps = {
	align: string,
	transform: string,
	size: number,
	color: string,
}

export const Paragraph = styled.p<ParagraphProps>`
	font-family: 'Montserrat', sans-serif;
	font-style: normal;
	font-weight: normal;
	line-height: 20px;
	font-size: ${props => props.size} + 'px';
	text-align: ${props => props.align};
	color: ${props => props.color};
	text-transform: ${props => props.transform};
	margin: 0;
`;
