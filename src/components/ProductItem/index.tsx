/* eslint-disable */

import React, { useState, useCallback } from 'react';

import * as S from './styles';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Swiper from '../SwiperImage';
import Circle from '../ColorsSwitch';
import Paragraph from '../Paragraph';
import Button from '../Button';
import Title from '../Title';
import Card from '../Card';
import SlideDrawer from '../Drawer';
import Backdrop from '../Drawer/Backdrop';

import Image from '../../assets/img/1.jpg';

const ModalComponent = (isOpen: boolean, drawerCallback: any, closeCallback: ((event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void) | undefined) => {

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={closeCallback}
			contentLabel="Example Modal"
			shouldCloseOnOverlayClick
			overlayClassName="outline"
			className="Modal"
		>
			<S.WrapperWithPadder>
				<S.CardContainer>
					<S.ModalTitle>Produto adicionado com sucesso!</S.ModalTitle>
					<FontAwesomeIcon icon={faTimes} onClick={closeCallback} size="lg" color="#5F75AA" />
				</S.CardContainer>
				<S.ModalWrapper>
					<img src={Image} width="100%" height="auto" />
					<S.ModalActions>
						<Button click={drawerCallback} />
						<Link to="/" color="#AEB6C1" >
							<Paragraph color="#AEB6C1" size={18}>
								Guia de Medidas
						</Paragraph>
						</Link>
					</S.ModalActions>
				</S.ModalWrapper>
			</S.WrapperWithPadder>
		</Modal>
	)
}
const index = () => {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const [isDrawerOpen, setDrawerOpen] = useState(false);

	const setDrawer = useCallback(() => {
		setDrawerOpen(!isDrawerOpen);
	}, [isDrawerOpen]);

	const backDropHandler = useCallback(() => {
		setDrawerOpen(false);
	}, []);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<S.Container>
			{ModalComponent(modalIsOpen, setDrawer, closeModal)}
			<SlideDrawer transform={isDrawerOpen} />
			{
				isDrawerOpen ? (
					<Backdrop close={backDropHandler} />
				) : null
			}
			<S.TextTitle>Rasteira Tira Dedo</S.TextTitle>
			<S.Subtitle>RT 0568 | 03.07.0653</S.Subtitle>
			<Swiper />
			<Circle color="#ff6100" />
			<S.Wrapper>
				<S.SizeSection>
					<Paragraph size={14} color="#202020" align="none" transform="none">
						Tamanho
			</Paragraph>
					<Link to="/" color="#DE8F75">
						<Paragraph color="#DE8F75" size={14}>
							Guia de Medidas
				</Paragraph>
					</Link>
				</S.SizeSection>
				<S.ProductSizeContainer>
					<S.ProductSize>20</S.ProductSize>
					<S.ProductSize>18</S.ProductSize>
					<S.ProductSize>40</S.ProductSize>
					<S.ProductSize>60</S.ProductSize>
					<S.ProductSize>24</S.ProductSize>
					<S.ProductSize>26</S.ProductSize>
					<S.ProductSize>28</S.ProductSize>
				</S.ProductSizeContainer>
				<S.PriceContainer>
					<S.Price>
						<Paragraph
							size={12}
							color="#E35442"
							align="none"
							transform="none"
							decoration="line-through"
						>
							R$ 69,00
				</Paragraph>
						<Paragraph size={16} color="#686868" align="none" transform="none">
							R$ 55,20
				</Paragraph>
						<Paragraph size={12} color="#7F7F7F" align="none" transform="none">
							Ou 6x de R$ 9,20
				</Paragraph>
					</S.Price>
					<Button click={openModal}/>
				</S.PriceContainer>
				<S.DescriptionContainer>
					<Title align="none" size={16} transform="none" />
					<Paragraph size={14} color="#202020" align="none" transform="none">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores architecto distinctio
						officia, numquam voluptatibus obcaecati quia corrupti reiciendis, dolorem quidem sunt
						veniam perferendis voluptatem nulla illo facilis esse magni. Maxime.
			</Paragraph>
				</S.DescriptionContainer>
			</S.Wrapper>
		</S.Container>
	);
};

export default index;
