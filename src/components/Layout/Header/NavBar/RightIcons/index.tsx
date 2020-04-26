/* eslint-disable */

import React from 'react';

import  Styled  from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';


const index = () => {
	return (
		<Container>
			<FontAwesomeIcon icon={faSearch} color="#686868" size="2x" />
			<FontAwesomeIcon icon={faShoppingBag} color="#686868" size="2x" />
		</Container>
	);
};

const Container = Styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;


export default index;
