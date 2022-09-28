import axios from 'axios';
import { INotificationsItem } from '../../screens/NotificationsScreen/components/NotificationsList/NotificationsList.types';
import { notificationsStore } from '../../store/Notifications/NotificationsStore';
import { NotificationsType } from '../../store/Notifications/NotificationsType/NotificationsType';

const notificationsArray: INotificationsItem[] = [
    {
        id: 1,
        description: 'Уведомление о чем-то несомненно очень и очень важном1',
        selected: false,
        isRead: false,
    },
    {
        id: 2,
        description: 'Уведомление о чем-то несомненно очень и очень важном2',
        selected: false,
        isRead: false,
    },
    {
        id: 3,
        description: 'Уведомление о чем-то несомненно очень и очень важном3',
        selected: false,
        isRead: false,
    },
    {
        id: 4,
        description: 'Уведомление о чем-то несомненно очень и очень важном4',
        selected: false,
        isRead: false,
    },
    {
        id: 5,
        description: 'Уведомление о чем-то несомненно очень и очень важном5',
        selected: false,
        isRead: false,
    },
    {
        id: 6,
        description: 'Уведомление о чем-то несомненно очень и очень важном6',
        selected: false,
        isRead: false,
    },
    {
        id: 7,
        description: 'Уведомление о чем-то несомненно очень и очень важном7',
        selected: false,
        isRead: false,
    },
    {
        id: 8,
        description: 'Уведомление о чем-то несомненно очень и очень важном8',
        selected: false,
        isRead: false,
    },
    {
        id: 9,
        description: 'Уведомление о чем-то несомненно очень и очень важном9',
        selected: false,
        isRead: false,
    },
    {
        id: 10,
        description: 'Уведомление о чем-то несомненно очень и очень важном10',
        selected: false,
        isRead: false,
    },
    {
        id: 11,
        description: 'Уведомление о чем-то несомненно очень и очень важном11',
        selected: false,
        isRead: false,
    },
    {
        id: 12,
        description: 'Уведомление о чем-то несомненно очень и очень важном12',
        selected: false,
        isRead: false,
    },
    {
        id: 13,
        description: 'Уведомление о чем-то несомненно очень и очень важном13',
        selected: false,
        isRead: false,
    },
];

class NotificationsService {
    async getNotificationsData(): Promise<Array<INotificationsItem>> {
        try {
            // const notifications = await axios.get<Array<INotificationsItem>>('https://workers.softmg.ru/api/get-notifications');
        } catch (e) {
            console.log(e);
        }

        notificationsStore.setNotifications(
            <NotificationsType>notificationsArray,
        );
        return <Array<INotificationsItem>>notificationsStore.notificationsItem;
    }

    async markReadNotifications(ids: Array<number>): Promise<number> {
        let status: number = 1;
        try {
            await axios.post(
                'https://workers.softmg.ru/api/mark-read-notifications',
                ids,
            );
            status = 0;
        } catch (e) {
            console.log(e);
        }

        return status;
    }

    async deleteNotifications(ids: Array<number>): Promise<number> {
        let status: number = 1;
        try {
            await axios.post<Array<INotificationsItem>>(
                'https://workers.softmg.ru/api/delete-notifications',
                ids,
            );
            status = 0;
        } catch (e) {
            console.log(e);
        }

        return status;
    }
}

export default new NotificationsService();
