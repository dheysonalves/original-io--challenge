import React from 'react';

import * as S from './style';

type ColorProps = {
	color: string
}

function circleMapping({ color }: ColorProps) {
	return <S.Circle color={color}></S.Circle>
}

const index = ({ color }: ColorProps) => {
	return (
		<S.Container>
			<S.Title>
				Cor:
			</S.Title>
			<S.Wrapper>
				<S.Button>
					<S.Circle color={color}></S.Circle>
				</S.Button>
				<S.Button>
					<S.Circle color={color}></S.Circle>
				</S.Button>
			</S.Wrapper>
		</S.Container>
	);
}

export default index;
