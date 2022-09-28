export interface Props {
    navigation: {
        setOptions: ({}) => void;
        goBack: () => void;
    };
}

export interface CreateVacationReqParams {
    createVacationReqParams: {
        date_from: string;
        date_to: string;
        comment: string;
        working_days_num?: number;
    };
}
