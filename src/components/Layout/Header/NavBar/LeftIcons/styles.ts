import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 768px) {
		display: none;
	}
	`;

	export const Button = styled.button`
	background-color: transparent;
	border-color: transparent;
	border: none;
	outline: none;
`;
