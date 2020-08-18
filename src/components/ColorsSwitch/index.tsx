import React from 'react';

import * as S from './style';

type ColorProps = {
	color: string
}


const index = ({ color }: ColorProps) => {
	return (
		<S.Container>
			<S.Title>
				Cor:
			</S.Title>
			<S.Wrapper>
				<S.Button color="#A9095E" />
				<S.Button color="#6B85C1" />
				<S.Button color="#A14830" />
				<S.Button color="#000000" />
			</S.Wrapper>
		</S.Container>
	);
}

export default index;
