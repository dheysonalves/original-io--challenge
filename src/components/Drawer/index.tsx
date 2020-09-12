/* eslint-disable react-hooks/rules-of-hooks */
import'./drawer.css';

import PropTypes from 'prop-types';
import React, { useCallback,useState } from 'react';

import * as S from './styles';

type SlideProps = {
	transform: boolean
}

const index = ({ transform }: SlideProps) => {

	return (
		<div className={transform ? 'side-drawer open' : 'side-drawer'}>

		</div>
	);
};


index.propTypes = {
	transform: false
};


export default index;
