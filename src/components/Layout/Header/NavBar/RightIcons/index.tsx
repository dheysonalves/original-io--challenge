/* eslint-disable */

import React from 'react';
import Styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import * as S from './styles';

const index = () => {
	return (
		<S.Container>
			<S.Button>
				<FontAwesomeIcon icon={faSearch} color="#686868" size="2x" />
			</S.Button>
			<S.Button>
				<FontAwesomeIcon icon={faShoppingBag} color="#686868" size="2x" />
			</S.Button>
		</S.Container>
	);
};

export default index;
