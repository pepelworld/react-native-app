export interface Props {
    navigation: {
        setOptions: ({}) => void;
        navigate: (route: string) => void;
        goBack: () => void;
    };
}

// export interface TransactionsDataItem {
//   amount: number;
//   comment: string;
//   created_at: string;
//   id: number;
//   is_paid: number;
//   updated_at: string;
//   user_id: number;
// }

export interface GetVacationsDataReqParams {
    getVacationsDataReqParams: {
        'filterData[date_from]': string;
        'filterData[date_to]': string;
    };
}
