import React, { useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Notifications from '../../components/Notifications/Notifications';
import { Container } from '../../components/Styled';
import { BackIcon } from '../../constants/icons';
import { COLORS } from '../../constants/theme';
import { headerTheme } from '../../navigation/styles/headerStyles';
import CheckBox from './components/CheckBox';
import { Props } from './SettingsScreen.types';

const SettingsScreen = ({ navigation }: Props) => {
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
        <Container fl ph>
            <Notifications />
            <CheckBox name={'Новая задача для меня'} />
            <CheckBox name={'Задачу вернули на доработку'} />
            <CheckBox name={'Пришёл платёж'} />
        </Container>
    );
};

export default SettingsScreen;
