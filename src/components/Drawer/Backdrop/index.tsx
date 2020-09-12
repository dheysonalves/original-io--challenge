import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styles';

type BackDropProps = {
	close: any,
}

const index = ({close}:BackDropProps) => {
	return (
		<S.BackDrop onClick={close}/>
	);
};


export default index;
