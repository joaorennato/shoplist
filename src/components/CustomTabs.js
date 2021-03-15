import React, { useState } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({state, navigation}) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    const resetTo = (screenName) => {
        navigation.reset({
            routes: [{
                name: screenName
            }]
        });
    }

    return (
        <TabArea>
            <TabItem onPress={()=>resetTo('Home')}>
                <Icon 
                    name="shopping-cart" 
                    size={ state.index === 0 ? 32 : 24 } 
                    color={ state.index === 0 ? "#1E8449" : "#FFFFFF"} 
                />
            </TabItem>
            <TabItem onPress={()=>resetTo('Done')}>
                <Icon 
                    name="check-square" 
                    size={ state.index === 1 ? 32 : 24 } 
                    color={ state.index === 1 ? "#1E8449" : "#FFFFFF"} 
                />
            </TabItem>
            <TabItem onPress={()=>resetTo('Total')}>
                <Icon 
                    name="dollar" 
                    size={ state.index === 2 ? 32 : 24 } 
                    color={ state.index === 2 ? "#1E8449" : "#FFFFFF"} 
                />
            </TabItem>
            <TabItemFilled onPress={()=>goTo('Add')}>
                <Icon 
                    name="plus-square" 
                    size={ state.index === 3 ? 32 : 24 } 
                    color="#FFFFFF" 
                />
            </TabItemFilled>
        </TabArea>
    );
}

const TabArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    background-color: #89BF9F;
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 60px;
`;
const TabItemFilled = styled(TabItem)`
    background-color: #1E8449;
`;