import {
    createStackNavigator,
    TransitionPresets,
} from '@react-navigation/stack';
import { headerTheme } from './styles/headerStyles';
import React from 'react';
import VacationScreen from '../screens/VacationsScreen/VacationScreen';
import AddVacationScreen from '../screens/VacationsScreen/AddVacationScreen/AddVacationScreen';

const Stack = createStackNavigator();

const VacationStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                ...TransitionPresets.SlideFromRightIOS,
                ...headerTheme,
                headerLeft: () => null,
            }}
            initialRouteName="Отпуска">
            <Stack.Screen name="Отпуска" component={VacationScreen} />
            <Stack.Screen
                name="Добавить отпуск"
                component={AddVacationScreen}
            />
        </Stack.Navigator>
    );
};

export default VacationStack;
