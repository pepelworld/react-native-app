import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet } from 'react-native';
import BirthdaysIcon from '../assets/icons/birthdaysIcon.svg';
import PaymentsIcon from '../assets/icons/paymentsIcon.svg';
import { OfflineWorkIcon, ReportsIcon, SettingsIcon } from '../constants/icons';
import { COLORS, FONTS } from '../constants/theme';
import BirthdaysScreen from '../screens/BirthdaysScreen/BirthdaysScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import TransactionsScreen from '../screens/TransactionsScreen/TransactionsScreen';
import CustomDrawerContent from './CustomDrawerContent';
import HomeStack from './HomeStack';
import AuthScreen from '../screens/Home/AuthScreen/AuthScreen';
import Keychain from 'react-native-keychain';
import ReportsStack from './ReportsStack';
import VacationStack from './VacationStack';
import { store } from '../store/RootStore';
import OfflineWorkStack from './OfflineWorkStack';

const Drawer = createDrawerNavigator();

const DrawerMenu = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}
            initialRouteName="HomeStack"
            screenOptions={{
                headerShown: false,
                swipeEnabled: true,
                // @ts-ignore
                drawerPosition: 'right',
                drawerStyle: styles.drawerStyle,
                drawerLabelStyle: styles.drawerLabelStyle,
                drawerActiveBackgroundColor: COLORS.white,
            }}>
            <Drawer.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    // @ts-ignore
                    drawerItemStyle: { display: 'none' },
                }}
            />
            <Drawer.Screen
                name="Платежи"
                component={TransactionsScreen}
                options={{
                    drawerIcon: () => (
                        <PaymentsIcon fill={COLORS.inactiveIcon} />
                    ),
                }}
                // @ts-ignore
                listeners={({ navigation }) => ({
                    drawerItemPress: (e: any) => {
                        // Prevent default action
                        e.preventDefault();
                        navigation.closeDrawer();
                        navigation.navigate('Tabs', {
                            screen: 'Платежи',
                        });
                    },
                })}
            />
            <Drawer.Screen
                name="Оффлайн работа"
                component={OfflineWorkStack}
                options={{
                    drawerIcon: () => (
                        <OfflineWorkIcon fill={COLORS.inactiveIcon} />
                    ),
                }}
                // @ts-ignore
                listeners={({ navigation }) => ({
                    drawerItemPress: (e: any) => {
                        // Prevent default action
                        e.preventDefault();
                        navigation.closeDrawer();
                        navigation.navigate('Tabs', {
                            screen: 'Оффлайн работа',
                        });
                    },
                })}
            />
            <Drawer.Screen
                name="Отчёты"
                component={ReportsStack}
                options={{
                    drawerIcon: () => (
                        <ReportsIcon fill={COLORS.inactiveIcon} />
                    ),
                }}
                // @ts-ignore
                listeners={({ navigation }) => ({
                    drawerItemPress: (e: any) => {
                        // Prevent default action
                        e.preventDefault();
                        navigation.closeDrawer();
                        navigation.navigate('Tabs', {
                            screen: 'Экран отчетов',
                        });
                    },
                })}
            />
            <Drawer.Screen
                name="Настройки"
                component={SettingsScreen}
                options={{
                    drawerIcon: () => (
                        <SettingsIcon fill={COLORS.inactiveIcon} />
                    ),
                }}
                // @ts-ignore
                listeners={({ navigation }) => ({
                    drawerItemPress: (e: any) => {
                        // Prevent default action
                        e.preventDefault();
                        navigation.closeDrawer();
                        navigation.navigate('Tabs', { screen: 'Настройки' });
                    },
                })}
            />
            <Drawer.Screen
                name="Отпуска"
                component={VacationStack}
                options={{
                    drawerIcon: () => (
                        // Нужна иконка отпуска
                        <BirthdaysIcon fill={COLORS.inactiveIcon} />
                    ),
                }}
                // @ts-ignore
                listeners={({ navigation }) => ({
                    drawerItemPress: (e: any) => {
                        // Prevent default action
                        e.preventDefault();
                        navigation.closeDrawer();
                        navigation.navigate('Tabs', {
                            screen: 'Отпуска',
                        });
                    },
                })}
            />
            <Drawer.Screen
                name="Дни рождения"
                component={BirthdaysScreen}
                options={{
                    drawerIcon: () => (
                        <BirthdaysIcon fill={COLORS.inactiveIcon} />
                    ),
                }}
                // @ts-ignore
                listeners={({ navigation }) => ({
                    drawerItemPress: (e: any) => {
                        // Prevent default action
                        e.preventDefault();
                        navigation.closeDrawer();
                        navigation.navigate('Tabs', {
                            screen: 'Дни рождения',
                        });
                    },
                })}
            />
            <Drawer.Screen
                name="Выйти"
                component={AuthScreen}
                options={{
                    // @ts-ignore
                    drawerLabelStyle: {
                        color: '#E64646',
                        fontSize: 18,
                        fontWeight: '400',
                    },
                }}
                // @ts-ignore
                listeners={({ navigation }) => ({
                    drawerItemPress: (e: any) => {
                        Keychain.resetGenericPassword();
                        e.preventDefault();
                        store.clearUserStore();
                        navigation.closeDrawer();
                        navigation.navigate('AuthScreen');
                    },
                })}
            />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    drawerStyle: {
        backgroundColor: COLORS.white,
        width: '90%',
    },
    drawerLabelStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: FONTS.body3.fontSize,
        fontFamily: FONTS.body3.fontFamily,
        color: COLORS.black,
        marginLeft: -10,
    },
});

export default DrawerMenu;
