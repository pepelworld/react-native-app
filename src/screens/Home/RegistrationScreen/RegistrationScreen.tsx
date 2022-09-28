import React, { useLayoutEffect, useState } from 'react';
import { useTogglePasswordVisibility } from '../../../hooks/useTogglePasswordVisibility';
import { useForm } from 'react-hook-form';
import { LoginUser } from '../../../service/AuthService/LoginUser';
import { store } from '../../../store/RootStore';
import {
    Keyboard,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import Input from '../../../components/Input/Input';
import HookFormError from '../../../components/HookFormError/HookFormError';
import Button from '../../../components/Styled/Button/Button';
import styled from 'styled-components/native';
import { COLORS, SIZES } from '../../../constants/theme';
import { Props } from './RegistrationScreen.types';

const RegistrationScreen = (props: Props) => {
    const [errorPassword, setErrorPassword] = useState('');
    const [error, setError] = useState(false);
    const { passwordVisibility, handlePasswordVisibility } =
        useTogglePasswordVisibility();

    const { control, handleSubmit } = useForm({
        defaultValues: {
            login: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const onRegistrationUser = async (data: any) => {
        if (
            data.login !== '' &&
            data.email !== '' &&
            data.password !== '' &&
            data.confirmPassword !== ''
        ) {
            if (data.password === data.confirmPassword) {
                setErrorPassword('');
                setError(false);
                await LoginUser(data, props.navigation);
            } else {
                setErrorPassword('Пароли не совпадают');
            }
        } else {
            setError(true);
        }
    };
    const onAuthScreen = () => {
        props.navigation.navigate('AuthScreen');
        setErrorPassword('');
    };
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <BackgroundContainer
                source={require('../../../assets/images/bgAuth.png')}
                resizeMode="cover">
                <Input
                    height={44}
                    width={309}
                    placeholder={'reshala228'}
                    children={'Логин'}
                    control={control}
                    name={'login'}
                />
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
                <Input
                    height={44}
                    width={309}
                    placeholder={'******'}
                    children={'Подтвердите пароль'}
                    secureField={true}
                    onPress={handlePasswordVisibility}
                    secureTextEntry={passwordVisibility}
                    control={control}
                    name={'confirmPassword'}
                />
                {errorPassword ? (
                    <HookFormError error={Error} errorMessage={errorPassword} />
                ) : null}
                {error ? (
                    <HookFormError
                        error={Error}
                        errorMessage={'Заполните пустые поля'}
                    />
                ) : null}
                <Button
                    onPress={handleSubmit(onRegistrationUser)}
                    width={308}
                    children={'Зарегистрироваться'}
                    marginTop={3}
                />
                <TouchableOpacity onPress={onAuthScreen} style={{ height: 50 }}>
                    <Text
                        style={{
                            color: COLORS.lightAccent,
                            marginTop: 10,
                            fontSize: SIZES.font,
                        }}>
                        Войти
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

export default RegistrationScreen;
