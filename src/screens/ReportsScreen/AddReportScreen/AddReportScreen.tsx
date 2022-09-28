import moment from 'moment';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Keyboard, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import styled from 'styled-components/native';
import Dropdown from '../../../components/Dropdown/Dropdown';
import HookFormError from '../../../components/HookFormError/HookFormError';
import { Container, Text } from '../../../components/Styled';
import Button from '../../../components/Styled/Button/Button';
import TimePicker from '../../../components/TimePicker/TimePicker';
import { BackIcon } from '../../../constants/icons';
import { COLORS } from '../../../constants/theme';
import ProfileService from '../../../service/ProfileService/ProfileService';
import { Props } from './AddReportScreen.types';

const AddReportScreen = ({ navigation }: Props) => {
    const [open, setOpen] = useState(false);
    const [projectId, setProjectId] = useState(43);
    const [projects, setProjects] = useState([]);

    const initialDateWithSetTime = () => {
        let time = moment();
        time.set({
            hour: 0,
            minute: 0,
            seconds: 0,
        });

        return new Date(moment(time).toLocaleString());
    };

    const createReportHandler = (data: any) => {
        const sendTimeInMinutes =
            moment(data.time).diff(initialDateWithSetTime()) / 1000 / 60;

        const params = {
            project_id: +projectId,
            spent_time: sendTimeInMinutes,
            comment: data.comment,
        };

        ProfileService.createWorkReportReq({ params }).then();
    };

    const sendReportHandler = () => {
        ProfileService.createDailyWorkReportReq().then();
    };

    useEffect(() => {
        ProfileService.getProjectsListReq()
            .then(res => setProjects(res.data))
            .catch(e => {
                throw e;
            });
    }, []);

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

    const dropdownItems = Object.entries(projects).map(item => {
        return { label: item[1], id: item[0] };
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            time: initialDateWithSetTime,
            comment: '',
        },
    });

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Container fl ph>
                <Text mt={22.5} mb={12}>
                    Выберите проект
                </Text>
                <Dropdown data={dropdownItems} setElement={setProjectId} />
                <Text mt={12} mb={12}>
                    Затраченное время
                </Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                        validate: value => !value.toString().includes('00:00:'),
                    }}
                    render={({ field: { onChange, value } }) => (
                        <TimePicker
                            date={value}
                            setDate={e => {
                                onChange(e);
                            }}
                            open={open}
                            setOpen={setOpen}
                        />
                    )}
                    name="time"
                />
                <HookFormError
                    error={errors.time}
                    errorMessage={'Введите время'}
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
                        onPress={handleSubmit(createReportHandler)}
                        width="80%"
                        children={'Создать'}
                        marginTop={3}
                    />
                    <Button
                        onPress={() => sendReportHandler()}
                        width="80%"
                        children={'Отправить дневной отчет'}
                        marginTop={10}
                    />
                </Container>
            </Container>
        </TouchableWithoutFeedback>
    );
};

export default AddReportScreen;

const StyledInput = styled.TextInput`
    padding-horizontal: 20px;
    border-radius: 10px;
    border-width: 1px;
    height: 158px;
    border-color: ${COLORS.gray};
    font-size: 16px;
`;
