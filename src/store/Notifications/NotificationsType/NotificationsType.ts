import { TypeOfValue, types } from 'mobx-state-tree';

export const NotificationsItem = types.model({
    id: types.maybeNull(types.number),
    description: types.maybeNull(types.string),
    selected: types.maybeNull(types.boolean),
    isRead: types.maybeNull(types.boolean),
});

export type NotificationsType = TypeOfValue<typeof NotificationsItem>;
