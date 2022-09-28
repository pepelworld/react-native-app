import { TypeOfValue, types } from 'mobx-state-tree';

export const UserStore = types.model({
    id: types.maybeNull(types.number),
    name: types.maybeNull(types.string),
    email: types.maybeNull(types.string),
    created_at: types.maybeNull(types.string),
    updated_at: types.maybeNull(types.string),
    api_token: types.maybeNull(types.string),
    avatar: types.maybeNull(types.string),
    slackChannel: types.maybeNull(types.string),
    first_name: types.maybeNull(types.string),
    second_name: types.maybeNull(types.string),
    father_name: types.maybeNull(types.string),
    redmine_api: types.maybeNull(types.string),
    birth_date: types.maybeNull(types.string),
});

export type UserModel = TypeOfValue<typeof UserStore>;
