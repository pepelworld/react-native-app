import moment from 'moment';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback,
} from 'react-native';
import styled from 'styled-components/native';
import Dropdown from '../../../components/Dropdown/Dropdown';
import HookFormError from '../../../components/HookFormError/HookFormError';
import { Container, Text } from '../../../components/Styled';
import Button from '../../../components/Styled/Button/Button';
import TimePicker from '../../../components/TimePicker/TimePicker';
import { BackIcon } from '../../../constants/icons';
import { COLORS } from '../../../constants/theme';
import { headerTheme } from '../../../navigation/styles/headerStyles';
import ProfileService from '../../../service/ProfileService/ProfileService';
import { Props } from './AddOfflineWorkScreen.types';

const AddOfflineWork = ({ navigation }: Props) => {
    const [open, setOpen] = useState(false);
    const [projectId, setProjectId] = useState(43);
    const [workId, setWorkId] = useState(0);
    const [projects, setProjects] = useState([]);

    const workTypes = {
        1: 'Оффлайн фреймворки',
        2: 'Оффлайн CMS',
        3: 'Онлайн CMS',
    };

    const initialDateWithSetTime = () => {
        let time = moment();
        time.set({
            hour: 0,
            minute: 0,
            seconds: 0,
        });

        return new Date(moment(time).toLocaleString());
    };

    const createOfflineWorkHandler = (data: any) => {
        const sendTimeInMinutes =
            moment(data.time).diff(initialDateWithSetTime()) / 1000 / 60;

        const params = {
            work_type: +workId,
            project: +projectId,
            spent_time: sendTimeInMinutes,
            comment: data.comment,
        };
        ProfileService.createOfflineWorkReq({ params }).then();
    };

    useEffect(() => {
        ProfileService.getProjectsListReq().then(res => setProjects(res.data));
    }, []);

    const dropdownProjectIdItems = Object.entries(projects).map(item => {
        return { label: item[1], id: item[0] };
    });

    const dropdownWorkTypesItems = Object.entries(workTypes).map(item => {
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
            headerShown: true,
            ...headerTheme,
        });
    }, [navigation]);

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Container fl ph>
                <Text mt={22.5} mb={12}>
                    Тип работы
                </Text>
                <Dropdown
                    data={dropdownWorkTypesItems}
                    setElement={setWorkId}
                />

                <Text mt={12} mb={12}>
                    Проект
                </Text>
                <Dropdown
                    data={dropdownProjectIdItems}
                    setElement={setProjectId}
                />
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
                <Container ai={'center'} jc={'center'}>
                    <Button
                        onPress={handleSubmit(createOfflineWorkHandler)}
                        children={'Добавить'}
                        marginTop={20}
                        width={309}
                    />
                </Container>
            </Container>
        </TouchableWithoutFeedback>
    );
};

const StyledInput = styled.TextInput`
    padding-horizontal: 20px;
    border-radius: 10px;
    border-width: 1px;
    height: 158px;
    border-color: #f2f2f2;
    font-size: 16px;
`;

export default AddOfflineWork;
