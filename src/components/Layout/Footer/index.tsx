/* eslint-disable react-hooks/rules-of-hooks */
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useReducer,useState } from 'react';

import Logotype from '../../Image';
import Paragraph from '../../Paragraph';
import * as S from './styles';

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "state_one":
            return { ...state, one: false };
        case "state_two":
            return { ...state, two: false };
        case "state_three":
            return { ...state, three: false };
        default:
            return state;
    }
};

const index: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, {
        one: false,
        two: false,
        three: false,
    });

    return (
        <S.Container>
            <S.ListWrapper>
                <S.ListHeader>
                    <Paragraph size={14} align="none" color="#AEB6C1" transform="uppercase">
                        Institucional
                    </Paragraph>
                    <FontAwesomeIcon icon={faPlus} size="lg" color="#AEB6C1" style={{ marginRight: 10 }} onClick={() => dispatch({ type: "state_one", one: !state.one })} />
                </S.ListHeader>
                {
                    state.one && (
                        <S.UnorderedList>
                            <S.UnorderedItem>
                                Teste 1
                            </S.UnorderedItem>
                            <S.UnorderedItem>
                                Teste 1
                            </S.UnorderedItem>
                            <S.UnorderedItem>
                                Teste 1
                            </S.UnorderedItem>
                        </S.UnorderedList>
                    )
                }
            </S.ListWrapper>
            <S.ListWrapper>
                <S.ListHeader>
                    <Paragraph size={14} align="none" color="#AEB6C1" transform="uppercase">
                        Informações
                    </Paragraph>
                    <FontAwesomeIcon icon={faPlus} size="lg" color="#AEB6C1" style={{ marginRight: 10 }} onClick={() => dispatch({ type: "state_two", two: !state.two })} />
                </S.ListHeader>
                {
                    state.two && (
                        <S.UnorderedList>
                            <S.UnorderedItem>
                                Teste 1
                            </S.UnorderedItem>
                            <S.UnorderedItem>
                                Teste 1
                            </S.UnorderedItem>
                            <S.UnorderedItem>
                                Teste 1
                            </S.UnorderedItem>
                        </S.UnorderedList>
                    )
                }
            </S.ListWrapper>
            <S.ListWrapper>
                <S.ListHeader>
                    <Paragraph size={14} align="none" color="#AEB6C1" transform="uppercase">
                        Conheça
                    </Paragraph>
                    <FontAwesomeIcon icon={faPlus} size="lg" color="#AEB6C1" style={{ marginRight: 10 }} onClick={() =>
                        dispatch({ type: "state_three", three: !state.three })} />
                </S.ListHeader>
                {
                    state.three && (
                        <S.UnorderedList>
                            <S.UnorderedItem>
                                Teste 1
                            </S.UnorderedItem>
                            <S.UnorderedItem>
                                Teste 1
                            </S.UnorderedItem>
                            <S.UnorderedItem>
                                Teste 1
                            </S.UnorderedItem>
                        </S.UnorderedList>
                    )
                }
            </S.ListWrapper>
            <S.Infomation>
                <Paragraph size={12} align="none" color="#fff">
                    Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP. Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100 CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br
            </Paragraph>
                <S.SpacingDiv />
                <Logotype src="https://source.unsplash.com/random" width="200px" height="60px" />
            </S.Infomation>
        </S.Container>
    )
}

export default index;

