import { useEffect, useState } from 'react';
import * as Keychain from 'react-native-keychain';
import { store } from '../store/RootStore';
import { UserModel } from '../store/UserStore';
import AuthService from '../service/AuthService/AuthService';

export default function useUserLoginStatus() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [preLog, setPreLog] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        checkUserStatus();
        if (preLog) {
            login();
        }
    }, [password]);

    const checkUserStatus = async () => {
        try {
            const credentials = await Keychain.getGenericPassword();
            if (credentials) {
                setPreLog(true);
                setEmail(credentials.username);
                setPassword(credentials.password);
            }
        } catch (error) {
            console.log('error check user', error);
        }
    };

    const login = () => {
        try {
            AuthService.getUserData(email, password)
                .then(async res => {
                    if (res.data.email === email) {
                        await Keychain.setGenericPassword(email, password);
                        await store.setUser(res.data as UserModel);
                        await setIsLoggedIn(true);
                    }
                })
                .catch(e => {
                    console.log('Error GetUserData:', e);
                    throw e;
                });
        } catch (e) {
            console.log('ERROR');
        }
    };

    return isLoggedIn;
}
