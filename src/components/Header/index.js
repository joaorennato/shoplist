import React from 'react';
import {
    HeaderArea, 
    HeaderImage, 
    HeaderTitleArea, 
    HeaderTitle 
} from './style'

export default ({titulo}) => {

    return (
        <HeaderArea>
            <HeaderImage source={
                require('../../assets/groceries.jpg')
            } />
            <HeaderTitleArea>
                <HeaderTitle>{titulo}</HeaderTitle>
            </HeaderTitleArea>
        </HeaderArea>
    );
}
