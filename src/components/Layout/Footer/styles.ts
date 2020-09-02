import styled from 'styled-components';

export const Container = styled.footer`
    display:flex;
    flex-direction: column;
    align-items: center;
`;

export const Infomation = styled.div`
    background-color: #DE8F75;
    padding: 10px;
`;

export const SpacingDiv = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`;

export const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 10px;
    padding-right: 20px;
    padding-left: 20px;
    border-bottom: 1px solid #ddd;
`;

export const UnorderedList = styled.ul`
    text-decoration: none;
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 20px;
    margin-right: 20px;
`;


export const UnorderedItem = styled.li`
    font-size: 14px;
    color: #202020;
    margin-bottom: 10px;
`;

export const IconsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin: 20px;
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 40px;
`;

export const FooterLogotype = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const FormWrapper = styled.div`
    margin: 10px;
`;

export const Input = styled.input`
    margin: 10px;
    width: 100%;
    border: 0px;
    outline: none;
    border-bottom: 2px solid #AEB6C1;
    color: #202020
`;

export const RowInput = styled.div`
    display: flex;
    justify-content: space-between;
`;
