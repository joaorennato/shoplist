import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({id, nome, quantidade, preco, done, onPress, onLongPress}) => {

    return (
        <ListItemContainer key={id}>
            <ListItem onPress={onPress}>
                <ListInnerContainer>
                    <Infos>
                        <Nome>{nome}</Nome>
                        <InfoText>Quantidade: {quantidade}</InfoText>
                        <InfoText>Preço: R$ {parseFloat(preco).toFixed(2)} - Total: R$ {parseFloat((quantidade*preco)).toFixed(2)}</InfoText>
                    </Infos>
                    <CheckArea>
                        <CheckButton done={done == true ? true : false}>
                            <Icon name="check" size={24} color="#FFFFFF" />
                        </CheckButton>
                    </CheckArea>
                </ListInnerContainer>
            </ListItem>
        </ListItemContainer>
    );
}

const ListItemContainer = styled.View`
    padding: 0 20px;
    margin-bottom: 20px;
`;

const ListItem = styled.TouchableWithoutFeedback``;

const ListInnerContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #F2F2F2;
`;

const Infos = styled.View``; 

const Nome = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #333;
`; 

const InfoText = styled.Text`
    font-size: 14px;
    color: #444;
`; 

const CheckArea = styled.View``; 

const CheckButton = styled.View`
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: ${props => props.done == true ? '#89BF9F' : '#C4C4C4'};
`;