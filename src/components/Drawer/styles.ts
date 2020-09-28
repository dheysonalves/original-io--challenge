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

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RowPadder = styled.div`
	padding-top: 10px;
	padding-bottom: 10px;
`;

export const Col = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Divider = styled.div`
  border-bottom: 1px solid #e3e3e3;
  margin-top: 5px;
`;

export const countSpan = styled.span`
  color: #5f75aa;
  font-size: 14px;
  font-weight: bold;
  padding: 10px;
`;

export const FooterBackground = styled.div`
  background-color: #aeb6c1;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 40px;
  padding-right: 40px;
`;

export const ActionBackgorund = styled.div`
  padding: 10px;
  background-color: #e3e3e3;
`;
