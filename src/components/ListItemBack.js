import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

export default ({onDelete, onEdit}) => {
    return (
        <BackArea>
            <BotaoDelete onPress={onDelete}>
                <Icon name="trash" size={24} color="#FFFFFF" style={{paddingRight: 5}} />
            </BotaoDelete>
            <BotaoEdit onPress={onEdit}>
                <Icon name="edit" size={24} color="#FFFFFF" style={{paddingLeft: 5}} />
            </BotaoEdit>
        </BackArea>
    );
}

const BackArea = styled.View`
    flex: 1;
    width: 100%;
    padding: 0 20px;
    margin-bottom: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const BotaoDelete = styled.TouchableOpacity`
    width: 80px;
    height: 100%;
    background-color: #ff9994
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    align-items: center;
    justify-content: center;
`;

const BotaoEdit = styled.TouchableOpacity`
    width: 80px;
    height: 100%;
    background-color: #bed1d8;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    align-items: center;
    justify-content: center;
`;
