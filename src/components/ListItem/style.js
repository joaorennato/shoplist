import styled from 'styled-components/native';

export const ListItemContainer = styled.View`
    padding: 0 20px;
    margin-top: 20px;
`;

export const ListItemInner = styled.TouchableWithoutFeedback``;

export const ListInnerContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #F2F2F2;
`;

export const Infos = styled.View``; 

export const Nome = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #333;
`; 

export const InfoText = styled.Text`
    font-size: 14px;
    color: #444;
`; 

export const CheckArea = styled.View``; 

export const CheckButton = styled.View`
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: ${props => props.done == true ? '#89BF9F' : '#C4C4C4'};
`;