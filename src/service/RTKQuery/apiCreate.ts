import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { store } from '../../store/RootStore';

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://workers.softmg.ru/',
        prepareHeaders: async headers => {
            headers.set('Authorization', `Bearer ${store.user.api_token}`);
            headers.set('Content-Type', 'application/json');

            return headers;
        },
    }),
    endpoints: () => ({}),
    reducerPath: 'api',
    tagTypes: ['Profile', 'Auth'],
});
