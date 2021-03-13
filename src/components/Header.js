import React from 'react';
import styled from 'styled-components/native';

export default ({titulo}) => {
    return (
        <HeaderArea>
            <HeaderImage source={
                require('../assets/groceries.jpg')
            } />
            <HeaderTitleArea>
                <HeaderTitle>{ titulo }</HeaderTitle>
            </HeaderTitleArea>
        </HeaderArea>
    );
}

const HeaderArea = styled.View`
    width: 100%;
    height: 250px;
    position: relative;
`;

const HeaderImage = styled.Image.attrs({
    resizeMode: 'cover'
})`
    width: 100%;
    height: 250px;
    z-index: 4;
`;

const HeaderTitleArea = styled.View`
    display: flex;
    justify-content: center;
    position: absolute;
    left: 30px; top: 0;
    height: 250px; width: 50%;
    z-index: 5;
`;

const HeaderTitle = styled.Text`
    font-size: 32px;
    font-weight: 700;
    color: #FFFFFF;
    text-shadow: 2px 2px 10px rgba(0,0,0, .3);
    margin-bottom: 30px;
`;