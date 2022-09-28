import Keychain from 'react-native-keychain';
import { store } from '../../store/RootStore';
import { UserModel } from '../../store/UserStore';
import AuthService from './AuthService';

export interface IUserData {
    email: string;
    password: string;
    navigation: {};
}

export async function LoginUser(data: any, navigation: any) {
    const onPressHome = () => {
        navigation.navigate('Tabs');
    };

    AuthService.getUserData(data.email, data.password)
        .then(res => {
            if (res.data.email === data.email) {
                Keychain.setGenericPassword(data.email, data.password);
                store.setUser(res.data as UserModel);
                onPressHome();
                store.clearLoginError();
            }
        })
        .catch(error => {
            console.log('Error:', error.message);
            store.setLoginError();
        });
}
