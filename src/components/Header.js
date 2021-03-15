import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

export default ({titulo, showBackButton = false}) => {

    const navigation = useNavigation();

    return (
        <HeaderArea showBackButton={showBackButton}>
            <HeaderImage showBackButton={showBackButton} source={
                require('../assets/groceries.jpg')
            } />
            
            <HeaderTitleArea showBackButton={showBackButton}>
                { showBackButton && <BackButton onPress={()=>navigation.goBack()}>
                    <Icone name="chevron-left" size={24} color="#FFFFFF" />
                </BackButton> }
                <HeaderTitle>{ titulo }</HeaderTitle>
            </HeaderTitleArea>
        </HeaderArea>
    );
}

const HeaderArea = styled.View`
    width: 100%;
    height: ${props => props.showBackButton ? '150px' : '250px'};
    position: relative;
`;

const HeaderImage = styled.Image.attrs({
    resizeMode: 'cover'
})`
    width: 100%;
    height: ${props => props.showBackButton ? '150px' : '250px'};
    z-index: 4;
`;

const HeaderTitleArea = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: ${props => props.showBackButton ? '5px' : '30px' }; top: 0;
    height: ${props => props.showBackButton ? '150px' : '250px'}; 
    width: 50%;
    z-index: 5;
`;

const HeaderTitle = styled.Text`
    width: 100%;
    font-size: 32px;
    font-weight: 700;
    color: #FFFFFF;
    text-shadow: 2px 2px 10px rgba(0,0,0, .3);
`;

const BackButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    z-index: 6;
`;

const Icone = styled(Icon)`
    text-shadow: 2px 2px 10px rgba(0,0,0,.3);
`;
