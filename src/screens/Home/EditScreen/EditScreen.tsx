import React, { useLayoutEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TouchableOpacity } from 'react-native';
import HookFormError from '../../../components/HookFormError/HookFormError';
import Input from '../../../components/Input/Input';
import { Container } from '../../../components/Styled';
import Button from '../../../components/Styled/Button/Button';
import { BackIcon } from '../../../constants/icons';
import { COLORS } from '../../../constants/theme';
import { Props } from './EditScreen.types';
import ProfileService from '../../../service/ProfileService/ProfileService';

const EditScreen = ({ navigation }: Props) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        const params = {
            email: data.email,
            name: data.name,
        };
        ProfileService.updateInfoReq({ params }).then();
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        width: 48,
                        height: 48,
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                    }}>
                    <BackIcon fill={COLORS.lightAccent} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <Container fl ph>
            <Container mt={10.5}>
                <Input
                    children={'Новое имя'}
                    secureField={false}
                    placeholder={'Ivanov Ivan Ivanovich'}
                    control={control}
                    name={'name'}
                />
                <HookFormError
                    error={errors.name}
                    errorMessage={'Введите имя'}
                />
            </Container>
            <Input
                children={'Новый адрес электронной почты'}
                secureField={false}
                placeholder={'email@mail.ru'}
                control={control}
                name={'email'}
            />
            <HookFormError
                error={errors.email}
                errorMessage={'Введите email'}
            />
            <Container ai="center">
                <Button
                    onPress={handleSubmit(onSubmit)}
                    width={308}
                    children={'Редактировать'}
                    marginTop={25}
                />
            </Container>
        </Container>
    );
};

export default EditScreen;
