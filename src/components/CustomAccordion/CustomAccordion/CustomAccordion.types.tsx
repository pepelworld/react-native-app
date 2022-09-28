import { ReportListItem } from '../CustomAccordionItem/CustomAccordionItem.types';

export interface Props {
    reportList: Array<ReportListItem>;
    searchPhrase: string;
    onEndReached: () => void;
    stopFetchMore: () => void;
    loadingMore: boolean;
}
