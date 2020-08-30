/* eslint-disable */

import React from 'react';
import ProductItem from '../../ProductItem';
import ProductList from '../../ProductList';

import * as S from './styles';

const index = () => {
	return (
		<S.Main>
			<ProductItem />
			<ProductList />
		</S.Main>
	);
}

export default index;
