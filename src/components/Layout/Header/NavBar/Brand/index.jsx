/* eslint-disable */

import React from 'react';
import * as S from './styled';

import logo from '../../../../../assets/original-io.png';

const Brand = () => {
	return (
		<picture>
			<S.Image src={logo} alt="Company logo" />
		</picture>
	);
};

export default Brand;

