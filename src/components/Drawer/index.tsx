/* eslint-disable react-hooks/rules-of-hooks */
import'./drawer.css';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useCallback,useState  } from 'react';

import Title from '../Title';
import * as S from './styles';

type SlideProps = {
	transform: boolean;
}

const index = ({ transform }: SlideProps) => {

	return (
		<div className={transform ? 'side-drawer open' : 'side-drawer'}>
			<S.Container>
				<S.Header>
					<S.Header>
						<div>
							<Title color="#DE8F75" size={18} align="start" label="Sacola" />
							<Title color="#AEB6C1" size={14} align="start" label="5 items" />
						</div>
					</S.Header>
					<div>
						<FontAwesomeIcon icon={faTimes} color="#5F75AA" size="2x" />
					</div>
				</S.Header>
			</S.Container>
		</div>
	);
};


index.propTypes = {
	transform: false
};


export default index;
