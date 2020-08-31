import React from 'react'

import Logotype from '../../Image';
import Paragraph from '../../Paragraph';
import * as S from './styles';

function index() {
    return (
        <S.Container>
            <Paragraph size={12} align="none" color="#fff">
                Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP. Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100 CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br
            </Paragraph>
            <S.SpacingDiv />
            <Logotype src="https://source.unsplash.com/random" width="200px" height="60px" />
        </S.Container>
    )
}

export default index

