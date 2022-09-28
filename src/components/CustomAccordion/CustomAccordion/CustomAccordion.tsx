import moment from 'moment';
import * as React from 'react';
import { FlatList } from 'react-native';
import { List } from 'react-native-paper';
import CustomAccordionItem from '../CustomAccordionItem/CustomAccordionItem';
import { Props } from './CustomAccordion.types';
import { ReportListItem } from '../CustomAccordionItem/CustomAccordionItem.types';
import LoadSpinner from '../../LoadSpinner/LoadSpinner';

const CustomAccordion = ({
    reportList,
    searchPhrase,
    onEndReached,
    stopFetchMore,
    loadingMore,
}: Props) => {
    // @ts-ignore
    const renderItem = ({ item }: { item: ReportListItem }) => {
        if (searchPhrase === '') {
            return <CustomAccordionItem item={item} />;
        }
        if (
            item.comment &&
            item.comment
                .toUpperCase()
                .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
        ) {
            return <CustomAccordionItem item={item} />;
        }
        if (
            item.project_name &&
            item.project_name
                .toUpperCase()
                .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
        ) {
            return <CustomAccordionItem item={item} />;
        }
        if (
            item.updated_at &&
            moment(item.updated_at)
                .format('DD.MM.YYYY г. HH:mm:ss')
                .toUpperCase()
                .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
        ) {
            return <CustomAccordionItem item={item} />;
        }
    };
    return (
        <List.Section>
            <FlatList
                data={reportList}
                onEndReached={onEndReached}
                // @ts-ignore
                renderItem={renderItem}
                keyExtractor={item => item.id}
                onEndReachedThreshold={0.01}
                onScrollBeginDrag={stopFetchMore}
                ListFooterComponent={() =>
                    loadingMore ? <LoadSpinner /> : null
                }
            />
        </List.Section>
    );
};

export default CustomAccordion;
