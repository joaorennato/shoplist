import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Done from '../screens/Done';
import Total from '../screens/Total';

import CustomTabs from '../components/CustomTabs';

const Tabs = createBottomTabNavigator();

export default () => {
    return (
        <Tabs.Navigator tabBar={props=><CustomTabs {...props} />}>
            <Tabs.Screen name="Home" component={Home} />
            <Tabs.Screen name="Done" component={Done} />
            <Tabs.Screen name="Total" component={Total} />
        </Tabs.Navigator>
    );
}