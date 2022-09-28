import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { COLORS, SIZES } from '../../../../constants/theme';
import Modal from 'react-native-modal';
import { observer } from 'mobx-react-lite';
import { Container, Text } from '../../../../components/Styled';
import styled from 'styled-components/native';
import NotificationsService from '../../../../service/NotificationsService/NotificationsService';
import { INotificationsStore } from '../../../../store/Notifications/NotificationsStore';
import NotificationsItem from '../NotificationsItem/NotificationsItem';
import { INotificationsItem } from './NotificationsList.types';

export interface NotificationsList {
    notificationsStore: INotificationsStore;
}

const NotificationsList = ({ notificationsStore }: NotificationsList) => {
    const [notifications, setNotifications] = useState<INotificationsItem[]>(
        [],
    );

    useEffect(() => {
        NotificationsService.getNotificationsData().then(
            (data: INotificationsItem[]) => {
                setNotifications(data);
            },
        );
    }, []);

    const selectNotice = (id: number, longPress: boolean): void => {
        const selectedElement = notifications.filter(value => value?.selected);
        if (longPress && !selectedElement.length) {
            setNotifications(itemNotifications =>
                handlerSelectNotice(itemNotifications, id),
            );
        }
        if (
            (!longPress && selectedElement.length) ||
            notificationsStore.selectValue
        ) {
            setNotifications(itemNotifications =>
                handlerSelectNotice(itemNotifications, id),
            );
        }
    };
    const handlerSelectNotice = (
        itemNotifications: INotificationsItem[],
        id: number,
    ): INotificationsItem[] => {
        return itemNotifications.map(itemNotification =>
            itemNotification.id === id
                ? { ...itemNotification, selected: !itemNotification.selected }
                : { ...itemNotification },
        );
    };

    // const getSelectedIdsNotifications = (
    //     notifications: INotificationsItem[],
    // ): Array<number> => {
    //     let ids: Array<number> = [];
    //     for (let notification of notifications) {
    //         if (!notification.selected) {
    //             continue;
    //         }
    //         ids.push(notification.id);
    //     }
    //
    //     return ids;
    // };

    const deleteSelectedNotifications = async (): Promise<void> => {
        notificationsStore.setSelect(false);
        notificationsStore.setModalVisible(false);
        // const status = await NotificationsService.deleteNotifications(getSelectedIdsNotifications(notifications));
        // if (status !== SUCCESS_STATUS) {
        //     return;
        // }
        setNotifications(notificationsItem =>
            notificationsItem.filter(value => !value.selected),
        );
    };

    const selectNotifications = (): void => {
        notificationsStore.setSelect(true);
        notificationsStore.setModalVisible(false);
    };

    const markRead = async (): Promise<void> => {
        notificationsStore.setSelect(false);
        notificationsStore.setModalVisible(false);
        // const status = await NotificationsService.markReadNotifications(getSelectedIdsNotifications(notifications));
        // if (status !== SUCCESS_STATUS) {
        //     return;
        // }
        setNotifications(notificationsItem =>
            notificationsItem.map(value =>
                value.selected
                    ? {
                          ...value,
                          isRead: !value.isRead,
                          selected: !value.selected,
                      }
                    : { ...value },
            ),
        );
    };

    return (
        <Container mt={10.5} jc={'center'}>
            <StyledModal
                isVisible={notificationsStore.modalVisibleValue}
                onBackdropPress={() =>
                    notificationsStore.setModalVisible(false)
                }
                backdropTransitionOutTiming={0}
                backdropTransitionInTiming={0}
                backdropColor={'transparent'}>
                <ContainerModal>
                    <ModalButton onPress={() => selectNotifications()}>
                        <Text fs={16}>Выделить</Text>
                    </ModalButton>
                    <ModalButton onPress={() => markRead()}>
                        <Text fs={16}>Отметить как прочитанное</Text>
                    </ModalButton>
                    <ModalButton
                        onPress={() => deleteSelectedNotifications()}
                        last>
                        <Text fs={16}>Удалить выделенное</Text>
                    </ModalButton>
                </ContainerModal>
            </StyledModal>
            <FlatList
                data={notifications}
                renderItem={({ item }) => (
                    <NotificationsItem
                        notification={item}
                        onLongPress={() => selectNotice(item.id, true)}
                        onPress={() => selectNotice(item.id, false)}
                    />
                )}
                keyExtractor={notification => String(notification?.id)}
            />
        </Container>
    );
};

const StyledModal = styled(Modal)`
    position: relative;
    align-items: flex-end;
    bottom: 220px;
`;

const ContainerModal = styled.View`
    width: 250px;
    background-color: #f7f7f7;
    border-radius: 12px;
`;

const ModalButton = styled.TouchableOpacity<{
    last?: boolean;
}>`
    font-size: ${SIZES.h3};
    padding-left: ${SIZES.h3};
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom-width: ${props => (props.last ? '0px' : '1px')};
    border-bottom-color: ${COLORS.lightSeparator};
`;

export default observer(NotificationsList);
