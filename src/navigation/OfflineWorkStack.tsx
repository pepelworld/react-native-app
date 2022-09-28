import {
    createStackNavigator,
    TransitionPresets,
} from '@react-navigation/stack';
import React, { useLayoutEffect } from 'react';
import { headerTheme } from './styles/headerStyles';
import OfflineWorkScreen from '../screens/OfflineWorkScreen/OfflineWorkScreen';
import AddOfflineWork from '../screens/OfflineWorkScreen/AddOfflineWorkScreen/AddOfflineWorkScreen';

const Stack = createStackNavigator();

const OfflineWorkStack = (props: any) => {
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerShown: false,
        });
    }, [props.navigation]);

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                ...TransitionPresets.SlideFromRightIOS,
                ...headerTheme,
                headerLeft: () => null,
            }}
            initialRouteName="Оффлайн работа">
            <Stack.Screen name="Оффлайн работа" component={OfflineWorkScreen} />
            <Stack.Screen name="Добавить работу" component={AddOfflineWork} />
        </Stack.Navigator>
    );
};

export default OfflineWorkStack;
