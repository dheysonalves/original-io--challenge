/* eslint-disable */

import React from 'react';
import Styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';


const index = () => {
	return (
		<Container>
			<button style={buttonWrapper}>
				<FontAwesomeIcon icon={faSearch} color="#686868" size="2x" />
			</button>
			<button style={buttonWrapper}>
				<FontAwesomeIcon icon={faShoppingBag} color="#686868" size="2x" />
			</button>
		</Container>
	);
};

const Container = Styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const buttonWrapper = {
	backgroundColor: 'transparent',
	borderColor: 'transparent'
}


export default index;
