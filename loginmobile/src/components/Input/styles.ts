import styled, { css } from 'styled-components/native'

interface ContainerProps {
    isErrored: boolean;
}

interface TituloProps {
    isErrored: boolean;
    name: string;
}

export const Titulo = styled.Text<TituloProps>`
    font-size: 10px;
    color: #383E71;
    margin: 2% 0 2% 4%;
    ${(props) => 
        props.isErrored && props.name == "email" &&
        css`
            margin-top: -2%;
        `
    }

`;

export const MessageError = styled.Text`
    font-size: 10px;
    color: #FF377F;
    margin: 1% 0 0% 6%;

`;

export const Container = styled.View<ContainerProps>`
    width: 100%;
    height: 48px;
    margin-top: 2%;
    padding: 0 5%;
    background: #fff;
    border: 1px solid #989FDB;
    ${(props) => 
        props.isErrored &&
        css`
            border-Color: #FF377F;
        `
    }
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`;

export const TextInput = styled.TextInput`
    font-size: 14px;
`;