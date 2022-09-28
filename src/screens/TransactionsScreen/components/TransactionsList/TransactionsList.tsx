import React from 'react';
import { FlatList } from 'react-native';
import TransactionItem from '../TransactionsItem/TransactionItem';
import { Props, TransactionsListItem } from './TransactionsList.types';

const TransactionsList = ({ searchPhrase, transactionsList }: Props) => {
    // @ts-ignore
    const renderItem = ({ item }: { item: TransactionsListItem }) => {
        if (searchPhrase === '') {
            return (
                <TransactionItem
                    amount={item.amount}
                    comment={item.comment}
                    id={item.id}
                    created_at={item.created_at}
                    is_paid={item.is_paid}
                />
            );
        }
        if (
            item.amount
                .toString()
                .toUpperCase()
                .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
        ) {
            return (
                <TransactionItem
                    amount={item.amount}
                    comment={item.comment}
                    id={item.id}
                    created_at={item.created_at}
                    is_paid={item.is_paid}
                />
            );
        }
        if (
            item.comment
                .toUpperCase()
                .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
        ) {
            return (
                <TransactionItem
                    amount={item.amount}
                    comment={item.comment}
                    id={item.id}
                    created_at={item.created_at}
                    is_paid={item.is_paid}
                />
            );
        }
    };

    return (
        <FlatList
            data={transactionsList}
            // @ts-ignore
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    );
};

export default TransactionsList;
