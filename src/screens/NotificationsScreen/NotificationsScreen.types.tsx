export interface Props {
    modalVisible: boolean;
    notificationsArray: Array<INotificationsItem>;
    closeModalNotification: () => void;
    navigation: {
        setOptions: ({}) => void;
        goBack: () => void;
    };
}

export interface INotificationsItem {
    id: number;
    description: string;
    selected: boolean;
    isRead: boolean;
}

export interface INotifications {
    [key: string]: INotificationsItem;
}
