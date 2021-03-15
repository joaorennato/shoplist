import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainTabs from './MainTabs';
import Add from '../screens/Add';
import Edit from '../screens/Edit';

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainTabs" component={MainTabs} />
            <Stack.Screen name="Add" component={Add} />
            <Stack.Screen name="Edit" component={Edit} />
        </Stack.Navigator>
    );
}