import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import EditScreen from '../screens/Home/EditScreen/EditScreen';
import HomeScreen from '../screens/Home/HomeScreen/HomeScreen';
import { TransitionPresets } from '@react-navigation/stack';
import { headerTheme } from './styles/headerStyles';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                ...TransitionPresets.SlideFromRightIOS,
                ...headerTheme,
                headerLeft: () => null,
            }}
            initialRouteName="Личный кабинет">
            <Stack.Screen name="Личный кабинет" component={HomeScreen} />
            <Stack.Screen name="Редактировать" component={EditScreen} />
        </Stack.Navigator>
    );
};

export default HomeStack;
