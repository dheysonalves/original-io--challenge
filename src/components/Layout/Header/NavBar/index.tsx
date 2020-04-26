/* eslint-disable */

import React from 'react';
import Brand from './Brand/index';
import Icons from './RightIcons';
import * as S from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const header = () => {
	return (
		<S.Container>
			<div>
				<FontAwesomeIcon icon={faBars} color="#686868" size="2x" />
			</div>
			<Brand />
			<Icons />
		</S.Container>
	);
}

export default header;
