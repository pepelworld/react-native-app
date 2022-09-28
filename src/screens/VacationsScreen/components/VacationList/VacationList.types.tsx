export interface Props {
    vacationsList: Array<VacationsListItem>;
}

export interface VacationsListItem {
    id: number;
    date_from: string;
    date_to: string;
}
