import moment from 'moment';
import React, { useLayoutEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
    Keyboard,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import styled from 'styled-components/native';
import { Props } from './AddVacationScreen.types';
import { BackIcon } from '../../../constants/icons';
import { COLORS } from '../../../constants/theme';
import { Container, Text } from '../../../components/Styled';
import HookFormError from '../../../components/HookFormError/HookFormError';
import Button from '../../../components/Styled/Button/Button';
import TimePicker from '../../../components/TimePicker/TimePicker';
import ProfileService from '../../../service/ProfileService/ProfileService';

const AddVacation = ({ navigation }: Props) => {
    const [firstOpen, setFirstOpen] = useState(false);
    const [secondOpen, setSecondOpen] = useState(false);

    const createVacationHandler = (data: any) => {
        const sendVacationInDays = new Date(
            data.timeTo - data.timeFrom,
        ).getDate();

        const params = {
            date_from: data.timeFrom.toLocaleString(),
            date_to: data.timeTo.toLocaleString(),
            comment: data.comment,
            working_days_num: sendVacationInDays,
        };

        ProfileService.createVacationReq({ params }).then();
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
    const initialDateWithSetTime = () => {
        let time = moment();
        time.set({
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
        });

        return new Date(moment(time).toLocaleString());
    };

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            timeFrom: initialDateWithSetTime(),
            timeTo: initialDateWithSetTime(),
            comment: '',
        },
    });

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Container fl ph>
                <Text mt={22.5} mb={12}>
                    Дата начала
                </Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <TimePicker
                            isDate={true}
                            date={value}
                            setDate={e => {
                                onChange(e);
                            }}
                            open={firstOpen}
                            setOpen={setFirstOpen}
                        />
                    )}
                    name="timeFrom"
                />
                <HookFormError
                    error={errors.timeFrom}
                    errorMessage={'Выберите дату начала'}
                />

                <Text mt={12} mb={12}>
                    Дата окончания
                </Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <TimePicker
                            isDate={true}
                            date={value}
                            setDate={e => {
                                onChange(e);
                            }}
                            open={secondOpen}
                            setOpen={setSecondOpen}
                        />
                    )}
                    name="timeTo"
                />
                <HookFormError
                    error={errors.timeTo}
                    errorMessage={'Выберите дату окончания'}
                />

                <Text mt={12} mb={12}>
                    Комментарий
                </Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <StyledInput
                            style={{
                                textAlignVertical: 'top',
                            }}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="comment"
                />
                <HookFormError
                    error={errors.comment}
                    errorMessage={'Введите комментарий'}
                />
                <Container ai="center" mt={25}>
                    <Button
                        onPress={handleSubmit(createVacationHandler)}
                        width="80%"
                        children={'Создать отпуск'}
                        marginTop={3}
                    />
                </Container>
            </Container>
        </TouchableWithoutFeedback>
    );
};

export default AddVacation;

const StyledInput = styled.TextInput`
    padding-horizontal: 20px;
    border-radius: 10px;
    border-width: 1px;
    height: 158px;
    border-color: ${COLORS.gray};
    font-size: 16px;
`;
