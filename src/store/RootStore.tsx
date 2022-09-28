import { types } from 'mobx-state-tree';
import { UserStore, UserModel } from './UserStore';

const RootStore = types
    .model({
        user: UserStore,
        loginError: types.boolean,
        requestError: types.string,
    })
    .actions(self => ({
        setUser(data: UserModel) {
            self.user = data;
        },
        clearUserStore() {
            (self.user.id = null),
                (self.user.name = null),
                (self.user.email = null),
                (self.user.created_at = null),
                (self.user.updated_at = null),
                (self.user.api_token = null),
                (self.user.avatar = null),
                (self.user.slackChannel = null),
                (self.user.first_name = null),
                (self.user.second_name = null),
                (self.user.father_name = null),
                (self.user.redmine_api = null),
                (self.user.birth_date = null);
        },
        setLoginError() {
            self.loginError = true;
        },
        clearLoginError() {
            self.loginError = false;
        },
        setRequestError(error: string) {
            self.requestError = error;
        },
        clearRequestError() {
            self.requestError = '';
        },
    }));

export const store = RootStore.create({
    user: {},
    loginError: false,
    requestError: '',
});
