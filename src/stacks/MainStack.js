import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainTabs from './MainTabs';

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainTabs" component={MainTabs} />
        </Stack.Navigator>
    );
}