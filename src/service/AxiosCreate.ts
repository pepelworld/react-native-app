import axios from 'axios';
import { store } from '../store/RootStore';

const axiosCreate = () => {
    return axios.create({
        baseURL: 'https://workers.softmg.ru/',
        timeout: 1000,
        headers: {
            authorization: `Bearer ${store.user.api_token}`,
        },
    });
};

axiosCreate().interceptors.response.use(
    res => res,
    store.clearRequestError(),
    // @ts-ignore
    error => {
        store.setRequestError(error.message);
        const status = error?.response?.status;
        if (status === 401) {
            error.config.headers.authorization = `Bearer ${store.user.api_token}`;
            error.config.baseURL = 'https://workers.softmg.ru/';
            return axios.request(error.config);
        }
    },
);

axiosCreate().interceptors.request.use(
    res => {
        store.clearRequestError();
    },
    // @ts-ignore
    error => {
        store.setRequestError(error.message);
        const status = error?.response?.status;
        if (status === 401) {
            error.config.headers.authorization = `Bearer ${store.user.api_token}`;
            error.config.baseURL = 'https://workers.softmg.ru/';
            return axios.request(error.config);
        }
    },
);

export default axiosCreate;
