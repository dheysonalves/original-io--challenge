/* eslint-disable */

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MediaQuery from 'react-responsive';

import * as S from './styles';

const header = () => {
	return (
		<>
			<S.Button>
				<FontAwesomeIcon icon={faBars} color="#686868" size="2x" />
			</S.Button>
		</>
	);
}

export default header;
