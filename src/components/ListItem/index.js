import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    ListItemContainer,
    ListItemInner,
    ListInnerContainer,
    Infos,
    Nome,
    InfoText,
    CheckArea,
    CheckButton
} from './style';

export default ({item, onPress, onLongPress}) => {
    return (
        <ListItemContainer key={`${item.id}`}>
            <ListItemInner onPress={onPress} onLongPress={onLongPress}>
                <ListInnerContainer>
                    <Infos>
                        <Nome>{item.nome}</Nome>
                        <InfoText>Quantidade: {item.quantidade}</InfoText>
                        <InfoText>Preço: R$ {parseFloat(item.preco).toFixed(2)} - Total: R$ {parseFloat((item.quantidade*item.preco)).toFixed(2)}</InfoText>
                    </Infos>
                    <CheckArea>
                        <CheckButton done={item.done == true ? true : false}>
                            <Icon name="check" size={24} color="#FFFFFF" />
                        </CheckButton>
                    </CheckArea>
                </ListInnerContainer>
            </ListItemInner>
        </ListItemContainer>
    );
}