import React from 'react';
import styled from 'styled-components/native';
import { Container, Text } from '../../../../components/Styled';
import { COLORS } from '../../../../constants/theme';
import { Props } from './TransactionItem.types';

const TransactionItem = ({
    amount,
    comment,
    id,
    created_at,
    is_paid,
}: Props) => {
    return (
        <ItemContainer row jc="space-between" pv={20}>
            <Container ai="flex-start">
                <Text fs={14} mb={5} color={COLORS.inactiveIcon}>
                    №{id}
                </Text>
                <Text>Аванс</Text>
            </Container>
            <Container ai="flex-end">
                <Text fs={14} mb={5} color={COLORS.inactiveIcon}>
                    {is_paid ? 'Оплачен' : 'Не оплачен'} {created_at}
                </Text>
                <Text>{amount} ₽</Text>
            </Container>
        </ItemContainer>
    );
};

export default TransactionItem;

const ItemContainer = styled(Container)`
    border-bottom-width: 1px;
    border-bottom-color: #d7d8d9;
`;
