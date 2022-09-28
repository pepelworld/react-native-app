import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import useUserLoginStatus from './hooks/useUserLoginStatus';
import BottomTabs from './navigation/BottomTabs';
import AuthScreen from './screens/Home/AuthScreen/AuthScreen';
import messaging from '@react-native-firebase/messaging';
import PushNotification, { Importance } from 'react-native-push-notification';
import RegistrationScreen from './screens/Home/RegistrationScreen/RegistrationScreen';
import ErrorWindow from './components/ErrorWindow/ErrorWindow';

const Stack = createStackNavigator();

const App = () => {
    React.useEffect(() => {
        requestUserPermission();
        createChannel();
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            PushNotification.localNotification({
                channelId: 'workers',
                // @ts-ignore
                message: remoteMessage.notification?.body,
                title: remoteMessage.notification?.title,
            });
        });
        return unsubscribe;
    }, []);

    function createChannel() {
        PushNotification.createChannel(
            {
                channelId: 'workers',
                channelName: 'WORKERS',
                channelDescription:
                    'A channel to categorise your notifications',
                playSound: true,
                soundName: 'default',
                importance: Importance.HIGH,
                vibrate: true,
            },
            created => console.log(`createChannel returned '${created}'`),
        );
    }

    messaging().setBackgroundMessageHandler(async remoteMessage => {
        PushNotification.localNotification({
            channelId: 'workers',
            // @ts-ignore
            message: remoteMessage.notification?.body,
            title: remoteMessage.notification?.title,
        });
    });

    const requestUserPermission = async () => {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            getFcmToken();
            console.log('Authorization status:', authStatus);
        }
    };

    const getFcmToken = async () => {
        const fcmToken = await messaging().getToken();
        if (fcmToken) {
            console.log('Your Firebase Token is:', fcmToken);
        } else {
            console.log('Failed', 'No token received');
        }
    };

    const isLoggedIn = useUserLoginStatus();

    useEffect(() => {
        isLoggedIn === true
            ? SplashScreen.hide()
            : setTimeout(() => {
                  SplashScreen.hide();
              }, 1000);
    }, [isLoggedIn]);

    return (
        <NavigationContainer>
            <ErrorWindow />
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {isLoggedIn ? (
                    <Stack.Screen name="Home" component={BottomTabs} />
                ) : (
                    <Stack.Screen name="Auth" component={AuthScreen} />
                )}
                <Stack.Screen name="AuthScreen" component={AuthScreen} />
                <Stack.Screen name="Tabs" component={BottomTabs} />
                <Stack.Screen
                    name="Registration"
                    component={RegistrationScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
