import { getSnapshot, Instance, types } from 'mobx-state-tree';
import {
    NotificationsItem,
    NotificationsType,
} from './NotificationsType/NotificationsType';

export interface INotificationsStore
    extends Instance<typeof NotificationsStore> {}

const NotificationsStore = types
    .model('Notifications', {
        notifications: types.array(NotificationsItem),
        select: types.boolean,
        modalVisible: types.boolean,
    })
    .views(self => ({
        get notificationsItem() {
            return getSnapshot(self.notifications);
        },
        get selectValue(): boolean {
            return self.select;
        },
        get modalVisibleValue(): boolean {
            return self.modalVisible;
        },
    }))
    .actions(self => ({
        setNotifications(notifications: NotificationsType): void {
            self.notifications = notifications;
        },
        setSelect(select: boolean): void {
            self.select = select;
        },
        setModalVisible(modalVisible: boolean): void {
            self.modalVisible = modalVisible;
        },
    }));

export const notificationsStore = NotificationsStore.create({
    notifications: [],
    select: false,
    modalVisible: false,
});
