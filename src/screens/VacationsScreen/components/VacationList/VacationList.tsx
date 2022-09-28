import { FlatList } from 'react-native';
import React from 'react';
import { Props, VacationsListItem } from './VacationList.types';
import VacationItem from '../VacationItem/VacationItem';
import { Container } from "../../../../components/Styled";

const VacationsList = ({ vacationsList }: Props) => {
    // @ts-ignore
    const renderItem = ({ item }: { item: VacationsListItem }) => {
        return (
            <VacationItem
                id={item.id}
                date_from={item.date_from}
                date_to={item.date_to}
            />
        );
    };

    return (
        <Container mt={10.5}>
            <FlatList
                data={vacationsList}
                renderItem={renderItem}
                // @ts-ignore
                keyExtractor={item => item.id}
            />
        </Container>
    );
};

export default VacationsList;
