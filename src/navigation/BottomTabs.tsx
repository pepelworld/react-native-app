import {
    createBottomTabNavigator,
    useBottomTabBarHeight,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
    BirthdaysIcon,
    NotificationsIcon,
    PaymentsIcon,
    ProfileIcon,
    ReportsIcon,
} from '../constants/icons';
import BirthdaysScreen from '../screens/BirthdaysScreen/BirthdaysScreen';
import NotificationsScreen from '../screens/NotificationsScreen/NotificationsScreen';
import Transactions from '../screens/TransactionsScreen/TransactionsScreen';
import MenuDrawer from './MenuDrawer';
import ReportsStack from './ReportsStack';
import { headerTheme } from './styles/headerStyles';
import { tabBarTheme } from './styles/tabBarStyles';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import OfflineWorkStack from './OfflineWorkStack';
import VacationStack from './VacationStack';

const Tab = createBottomTabNavigator();

interface BottomTabsProps {}

const BottomTabs: React.FC<BottomTabsProps> = () => {
    return (
        <Tab.Navigator
            backBehavior="history"
            initialRouteName="Личный кабинет"
            screenOptions={{
                ...headerTheme,
                ...tabBarTheme,
            }}>
            <Tab.Screen
                name="Экран отчетов"
                component={ReportsStack}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => {
                        return <ReportsIcon fill={color} />;
                    },
                }}
            />
            <Tab.Screen
                name="Платежи"
                component={Transactions}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => <PaymentsIcon fill={color} />,
                }}
            />
            <Tab.Screen
                name="Уведомления"
                component={NotificationsScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <NotificationsIcon fill={color} />
                    ),
                    tabBarBadge: 52,
                    unmountOnBlur: true,
                }}
            />
            <Tab.Screen
                name="Дни рождения"
                component={BirthdaysScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => <BirthdaysIcon fill={color} />,
                }}
            />
            <Tab.Screen
                name="Личный кабинет"
                component={MenuDrawer}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => <ProfileIcon fill={color} />,
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Настройки"
                component={SettingsScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => {
                        return <ReportsIcon fill={color} />;
                    },
                    tabBarItemStyle: { display: 'none' },
                }}
            />
            <Tab.Screen
                name="Оффлайн работа"
                component={OfflineWorkStack}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => {
                        return <ReportsIcon fill={color} />;
                    },
                    tabBarItemStyle: { display: 'none' },
                }}
            />
            <Tab.Screen
                name="Отпуска"
                component={VacationStack}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => {
                        return <ReportsIcon fill={color} />;
                    },
                    tabBarItemStyle: { display: 'none' },
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;
