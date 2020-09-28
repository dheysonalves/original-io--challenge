import styled from 'styled-components';

type ButtonProps = {
	color: string,
	radius: string,
	textColor: string,
	eventBackground: string,
	eventColor: string,
	size: number,
}

export const Button = styled.button<ButtonProps>`
	outline: none;
	border: 0;
	background-color: ${props => props.color};
	border-radius: ${props => props.radius};
	color: ${props => props.textColor};
	font-size: ${props => props.size + 'px'};
	/* padding: 20px; */
	text-transform: uppercase;

	:focus {
		background-color: ${props => props.eventBackground};
		color: ${props => props.eventColor};
	}

	:hover {
		background-color: ${props => props.eventBackground};
		color: ${props => props.eventColor};
	}

	:active {
		background-color: ${props => props.eventBackground};
		color: ${props => props.eventColor};
	}
`;
