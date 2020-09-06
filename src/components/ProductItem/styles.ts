import styled from 'styled-components';

interface BackgroundProps {
	image?: string;
};

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
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

export const ModalTitle = styled.p`
	font-size: 20px;
	color: #de8f75;
	text-transform: uppercase;
	text-align: center;
`;

export const ModalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 200px;
	margin: 0 auto;
`;

export const ModalActions = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
	width: 100%;
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

export const WrapperWithPadder = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 5px;
	padding-bottom: 5px;
	padding-right: 20px;
	padding-left: 20px;
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

export const PriceContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Price = styled.div`
	margin-top: 10px;
	margin-bottom: 10px;
`;

export const DescriptionContainer = styled.div`
	margin-top: 10px;
	margin-bottom: 20px;
`;

export const CardContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
`;
