import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components/native';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Styled/Button/Button';
import { LogoIcon } from '../../../constants/icons';
import { COLORS, SIZES } from '../../../constants/theme';
import { useTogglePasswordVisibility } from '../../../hooks/useTogglePasswordVisibility';
import { LoginUser } from '../../../service/AuthService/LoginUser';
import { Props } from './AuthScreen.types';
import {
    Keyboard,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import { store } from '../../../store/RootStore';
import HookFormError from '../../../components/HookFormError/HookFormError';
import { observer } from 'mobx-react-lite';

const AuthScreen = (props: Props) => {
    const { passwordVisibility, handlePasswordVisibility } =
        useTogglePasswordVisibility();
    const [error, setError] = useState(false);

    const { control, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        if (data.email !== '' && data.password !== '') {
            setError(false);
            await LoginUser(data, props.navigation);
        } else {
            setError(true);
        }
    };

    const onRegistrationScreen = () => {
        props.navigation.navigate('Registration');
        store.clearLoginError();
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <BackgroundContainer
                source={require('../../../assets/images/bgAuth.png')}
                resizeMode="cover">
                <LogoIcon fill={'#2674CC'} />
                <Input
                    height={44}
                    width={309}
                    placeholder={'email@site.ru'}
                    children={'Email'}
                    control={control}
                    name={'email'}
                />
                <Input
                    height={44}
                    width={309}
                    placeholder={'******'}
                    children={'Введите пароль'}
                    secureField={true}
                    onPress={handlePasswordVisibility}
                    secureTextEntry={passwordVisibility}
                    control={control}
                    name={'password'}
                />
                {store.loginError === true && (
                    <HookFormError
                        error={Error}
                        errorMessage={'Неправильный логин или пароль'}
                    />
                )}
                {error === true && (
                    <HookFormError
                        error={Error}
                        errorMessage={'Заполните пустые поля'}
                    />
                )}
                <Button
                    onPress={handleSubmit(onSubmit)}
                    width={308}
                    children={'Войти'}
                    marginTop={3}
                />
                <TouchableOpacity
                    onPress={onRegistrationScreen}
                    style={{ height: 50 }}>
                    <Text
                        style={{
                            color: COLORS.lightAccent,
                            marginTop: 10,
                            fontSize: SIZES.font,
                        }}>
                        Зарегистрироваться
                    </Text>
                </TouchableOpacity>
            </BackgroundContainer>
        </TouchableWithoutFeedback>
    );
};

const BackgroundContainer = styled.ImageBackground<{
    children: React.ReactNode;
}>`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.white};
`;

export default observer(AuthScreen);
