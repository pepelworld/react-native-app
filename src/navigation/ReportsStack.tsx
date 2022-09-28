import {
    createStackNavigator,
    TransitionPresets,
} from '@react-navigation/stack';
import React from 'react';
import Report from '../screens/ReportsScreen/AddReportScreen/AddReportScreen';
import ReportsScreen from '../screens/ReportsScreen/ReportsScreen';
import { headerTheme } from './styles/headerStyles';

const Stack = createStackNavigator();

const ReportsStack = (props: any) => {
    React.useLayoutEffect(() => {
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
            initialRouteName="Отчеты">
            <Stack.Screen name="Отчеты" component={ReportsScreen} />
            <Stack.Screen name="Добавить отчет" component={Report} />
        </Stack.Navigator>
    );
};

export default ReportsStack;
