import styled from 'styled-components';

interface SlideProps {
	transformStyle?: any;
};

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;
