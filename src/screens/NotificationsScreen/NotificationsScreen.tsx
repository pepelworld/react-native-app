import React, { useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import NotificationsList from './components/NotificationsList/NotificationsList';
import { Container } from '../../components/Styled';
import { BackIcon, DotsIcon } from '../../constants/icons';
import { COLORS } from '../../constants/theme';
import { headerRightContainerStyle } from '../../navigation/styles/headerStyles';
import { notificationsStore } from '../../store/Notifications/NotificationsStore';
import { Props } from './NotificationsScreen.types';

const NotificationsScreen = ({ navigation }: Props) => {
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
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => notificationsStore.setModalVisible(true)}
                    style={{
                        width: 48,
                        height: 48,
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                    }}>
                    <DotsIcon fill={COLORS.lightAccent} />
                </TouchableOpacity>
            ),
            headerRightContainerStyle: {
                ...headerRightContainerStyle,
                justifyContent: 'flex-end',
            },
        });
    }, [navigation]);

    return (
        <Container fl ph>
            <NotificationsList notificationsStore={notificationsStore} />
        </Container>
    );
};

export default NotificationsScreen;
