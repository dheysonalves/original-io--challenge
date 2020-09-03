/* eslint-disable react-hooks/rules-of-hooks */
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useReducer, useState } from 'react';

import Button from '../../Button';
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
            <S.IconsWrapper>
                <S.RowContainer>
                    <Logotype src={require("../../../assets/facebook.svg")} width="auto" height="auto" />
                    <Logotype src={require("../../../assets/insta.svg")} width="auto" height="auto" />
                    <Logotype src={require("../../../assets/pinterest.svg")} width="auto" height="auto" />
                </S.RowContainer>
                <S.RowContainer>
                    <Logotype src={require("../../../assets/img/vtex-pci-200.png")} width="auto" height="auto" />
                    <Logotype src={require("../../../assets/img/selo-ebit.png")} width="auto" height="auto" />
                </S.RowContainer>
            </S.IconsWrapper>
            <S.FormWrapper>
                <Paragraph size={20} align="center" color="#AEB6C1" transform="uppercase">
                    Assine nossa news
                </Paragraph>
                <S.Input type="text" placeholder="Nome" alt="email" id="email" />
                <S.RowInput>
                    <S.Input type="email" placeholder="Email" color="#202020" alt="email" />
                    <Button label="Enviar" textColor="#fff" color="#DE8F75" eventBackground="#F2A398" />
                </S.RowInput>
            </S.FormWrapper>
            <S.Infomation>
                <Paragraph size={12} align="none" color="#fff">
                    Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP. Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100 CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br
            </Paragraph>
                <S.SpacingDiv />
                <S.FooterLogotype>
                    <Logotype src={require("../../../assets/original-2.svg")} width="auto" height="21px" />
                </S.FooterLogotype>
            </S.Infomation>
        </S.Container>
    )
}

export default index;

