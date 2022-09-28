import React from 'react';
import { GetTransactionsDataReqParams } from '../TransactionsScreen.types';

export interface Props {
    dateFrom: object;
    setDateFrom: React.Dispatch<React.SetStateAction<Date>>;
    openDateFromModalPickerModal: boolean;
    setOpenDateFromModalPickerModal: React.Dispatch<
        React.SetStateAction<boolean>
    >;
    dateTo: object;
    setDateTo: React.Dispatch<React.SetStateAction<Date>>;
    openDateToDatePickerModal: boolean;
    setOpenDateToDatePickerModal: React.Dispatch<React.SetStateAction<boolean>>;
    getTransactionsData: ({
        getTransactionsDataReqParams,
    }: GetTransactionsDataReqParams) => Promise<any>;
    setTransactionsData: React.Dispatch<React.SetStateAction<never[]>>;
    isModalVisible: boolean;
    toggleModal: () => void;
}
