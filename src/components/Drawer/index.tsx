/* eslint-disable react-hooks/rules-of-hooks */
import './drawer.css';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';

import Button from '../Button';
import Image from '../Image';
import Title from '../Title';
import * as S from './styles';

type SlideProps = {
	transform: boolean;
}

const index = ({ transform }: SlideProps) => {

	return (
		<div className={transform ? 'side-drawer open' : 'side-drawer'}>
			<S.Container>
				<S.Row>
					<S.Row>
						<div>
							<Title color="#DE8F75" size={18} align="start" label="Sacola" />
							<Title color="#AEB6C1" size={14} align="start" label="5 items" />
						</div>
					</S.Row>
					<div>
						<FontAwesomeIcon icon={faTimes} color="#5F75AA" size="2x" />
					</div>
				</S.Row>
				<S.Divider />
				<S.Col>
					<S.RowPadder>
						<S.Row>
							<Image src="https://source.unsplash.com/random" width="56px" height="90px" />
							<S.Col>
								<Title color="#202020" size={12} align="start" label="Rasteira Tira Dedo" />
								<Title color="#000000" size={14} align="start" label="R$ 49,90" weight="bold" />
							</S.Col>
							<div>
								<Button label="-" size={20} textColor="gray" color="transparent" eventBackground="transparent" eventColor="#5f75aa" />
								<S.countSpan>01</S.countSpan>
								<Button label="+" size={20} textColor="gray" color="transparent" eventBackground="transparent" eventColor="#5f75aa" />
							</div>
							<div>
								<Button label="X" size={12} textColor="#CCCCCC" color="transparent" eventBackground="transparent" eventColor="#5f75aa" />
							</div>
						</S.Row>
					</S.RowPadder>
					<S.RowPadder>
						<S.Row>
							<Image src="https://source.unsplash.com/random" width="56px" height="90px" />
							<S.Col>
								<Title color="#202020" size={12} align="start" label="Rasteira Tira Dedo" />
								<Title color="#000000" size={14} align="start" label="R$ 49,90" weight="bold" />
							</S.Col>
							<div>
								<Button label="-" size={20} textColor="gray" color="transparent" eventBackground="transparent" eventColor="#5f75aa" />
								<S.countSpan>01</S.countSpan>
								<Button label="+" size={20} textColor="gray" color="transparent" eventBackground="transparent" eventColor="#5f75aa" />
							</div>
							<div>
								<Button label="X" size={12} textColor="#CCCCCC" color="transparent" eventBackground="transparent" eventColor="#5f75aa" />
							</div>
						</S.Row>
					</S.RowPadder>
					<S.RowPadder>
						<S.Row>
							<Image src="https://source.unsplash.com/random" width="56px" height="90px" />
							<S.Col>
								<Title color="#202020" size={12} align="start" label="Rasteira Tira Dedo" />
								<Title color="#000000" size={14} align="start" label="R$ 49,90" weight="bold" />
							</S.Col>
							<div>
								<Button label="-" size={20} textColor="gray" color="transparent" eventBackground="transparent" eventColor="#5f75aa" />
								<S.countSpan>01</S.countSpan>
								<Button label="+" size={20} textColor="gray" color="transparent" eventBackground="transparent" eventColor="#5f75aa" />
							</div>
							<div>
								<Button label="X" size={12} textColor="#CCCCCC" color="transparent" eventBackground="transparent" eventColor="#5f75aa" />
							</div>
						</S.Row>
					</S.RowPadder>
				</S.Col>
			</S.Container>
			<S.FooterBackground>
				<Title color="#fff" size={14} align="center" label="Faltam R$ xx,xx para você Ganhar Frete Grátis" weight="normal" />
			</S.FooterBackground>
			<S.ActionBackgorund>
				<S.Row>
					<S.Col>
						<Title color="#202020" size={12} align="start" label="Rasteira Tira Dedo" />
						<Title color="#000000" size={14} align="start" label="R$ 49,90" weight="bold" />
					</S.Col>
					<Button label="Finalizar compra" size={12} style={{ padding: 20 }} />
				</S.Row>
			</S.ActionBackgorund>
		</div>
	);
};


index.propTypes = {
	transform: false
};


export default index;
