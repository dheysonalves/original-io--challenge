import styled from 'styled-components';

type ButtonProps = {
    color: string,
    radius: string,
    textColor: string,
    eventBackground: string,
    eventColor: string,
    size: number,
}


export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: #DE8F75;
    padding: 10px;
`;

export const SpacingDiv = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`;