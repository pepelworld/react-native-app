export interface Props {
    navigation: {
        setOptions: ({}) => void;
        goBack: () => void;
    };
}

export interface TransactionsDataItem {
    amount: number;
    comment: string;
    created_at: string;
    id: number;
    is_paid: number;
    updated_at: string;
    user_id: number;
}

export interface GetTransactionsDataReqParams {
    getTransactionsDataReqParams: {
        'filterData[date_from]': string;
        'filterData[date_to]': string;
        page: number;
        limit: number;
    };
}
