/* eslint-disable */

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MediaQuery from 'react-responsive';

const header = () => {
	return (
		<>
			<button style={buttonWrapper}>
				<FontAwesomeIcon icon={faBars} color="#686868" size="2x" />
			</button>
		</>
	);
}

const buttonWrapper = {
	backgroundColor: 'transparent',
	borderColor: 'transparent'
}



export default header;
