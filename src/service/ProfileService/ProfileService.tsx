import axiosCreate from '../AxiosCreate';
import { GetTransactionsDataReqParams } from '../../screens/TransactionsScreen/TransactionsScreen.types';
import { GetVacationsDataReqParams } from '../../screens/VacationsScreen/VacationScreen.types';

class ProfileService {
    getProjectsListReq = async () =>
        await axiosCreate().get('frontend/profile/getProjectsList');

    createWorkReportReq = async ({ params }: { params: any }) => {
        await axiosCreate().post('frontend/profile/createWorkReport', params);
    };

    createDailyWorkReportReq = async () => {
        await axiosCreate().post('frontend/profile/createDailyWorkReport');
    };

    getWorkReportListReq = async ({ params }: { params: any }) =>
        await axiosCreate().post('frontend/profile/getWorkReportList', params);

    createOfflineWorkReq = async ({ params }: { params: any }) => {
        await axiosCreate().post('/frontend/profile/createOfflineWork', params);
    };
    getOfflineWorkList = async ({ params }: { params: any }) => {
        await axiosCreate().post(
            '/frontend/profile/getOfflineWorkList',
            params,
        );
    };

    updateInfoReq = async ({ params }: { params: any }) => {
        await axiosCreate().post('/frontend/profile/updateinfo', params);
    };

    getBirthdayList = async ({ getBirthdayDataReqParams }: any) => {
        let params = getBirthdayDataReqParams;

        return await axiosCreate().get('api/profile/birthdays', {
            params,
        });
    };

    getTransactionsDataReq = async ({
        getTransactionsDataReqParams,
    }: GetTransactionsDataReqParams) => {
        let params = getTransactionsDataReqParams;
        return await axiosCreate().get('/api/profile/transactions', {
            params,
        });
    };

    getVacationsListReq = async ({
        getVacationsDataReqParams,
    }: GetVacationsDataReqParams) => {
        let params = getVacationsDataReqParams;
        return await axiosCreate().post('/frontend/profile/getVacationList', {
            params,
        });
    };

    createVacationReq = async ({ params }: any) => {
        return await axiosCreate().post('/frontend/profile/getVacationList', {
            params,
        });
    };
}

export default new ProfileService();
