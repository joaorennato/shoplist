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

export const ListArea = styled.ScrollView`
    flex: 1;
    width: 100%;
    background-color: #FFFFFF;
    z-index: 10;
`;

export const Spacer = styled.View`
    width: 100%;
    height: 20px;
    background-color: #FFFFFF;
`;