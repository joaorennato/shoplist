import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #FFFFFF;
`;

export const Texto = styled.Text`
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
`;

export const ListArea = styled.View`
    flex: 1;
    background-color: #FFFFFF;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-top: -20px;
    padding: 20px 0 0 0;
    z-index: 10;
`;

export const Lista = styled.FlatList``;

export const TotalArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 10px 20px;
    background-color: #B6D1C1;
`;

export const TextBold = styled.Text`
    font-size: 18px;
    font-weight: 700;
    color: #333;
    margin-right: 5px;
    text-transform: uppercase;
`;

export const TextNormal = styled.Text`
    font-size: 18px;
    font-weight: 500;
    color: #444;
`;