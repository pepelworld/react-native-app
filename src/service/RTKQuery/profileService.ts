import { api } from './apiCreate';

export const ProfileApi = api.injectEndpoints({
    endpoints: build => ({
        projectList: build.query({
            providesTags: ['Profile'],
            query: () => 'frontend/profile/getProjectsList',
        }),
        createWorkReport: build.mutation<string, { payload: any }>({
            invalidatesTags: ['Profile'],
            query: ({ payload }) => ({
                body: {
                    payload,
                },
                method: 'POST',
                url: 'frontend/profile/createWorkReport',
            }),
        }),
        createDailyWorkReport: build.mutation({
            invalidatesTags: ['Profile'],
            query: () => ({
                method: 'POST',
                url: 'frontend/profile/createDailyWorkReport',
            }),
        }),
        workReportList: build.mutation<string, { payload: any }>({
            invalidatesTags: ['Profile'],
            query: () => ({
                method: 'POST',
                url: 'frontend/profile/createWorkReport',
            }),
        }),
        createOfflineWork: build.mutation<string, { payload: any }>({
            invalidatesTags: ['Profile'],
            query: () => ({
                method: 'POST',
                url: 'frontend/profile/createWorkReport',
            }),
        }),
        offlineWorkList: build.mutation<string, { payload: any }>({
            invalidatesTags: ['Profile'],
            query: () => ({
                method: 'POST',
                url: 'frontend/profile/createWorkReport',
            }),
        }),
    }),
    overrideExisting: false,
});

export const { projectList, createWorkReport, createDailyWorkReport } =
    ProfileApi;
