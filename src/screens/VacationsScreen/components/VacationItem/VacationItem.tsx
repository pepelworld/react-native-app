import { Container } from '../../../../components/Styled';
import styled from 'styled-components/native';
import React from 'react';
import { Props } from './VacationItem.types';

const VacationItem = ({ date_from, date_to, id }: Props) => {
    return (
        <ItemContainer row jc="space-between" pv={20}>
            // Нужно решить как будет выглядеть айтем с информацией об отпусках
            {/*<Container ai="flex-start">*/}
            {/*    <Text fs={14} mb={5} color={COLORS.inactiveIcon}>*/}
            {/*        №{id}*/}
            {/*    </Text>*/}
            {/*    <Text>Аванс</Text>*/}
            {/*</Container>*/}
            {/*<Container ai="flex-end">*/}
            {/*    <Text fs={14} mb={5} color={COLORS.inactiveIcon}>*/}
            {/*        {is_paid ? 'Оплачен' : 'Не оплачен'} {created_at}*/}
            {/*    </Text>*/}
            {/*    <Text>{amount} ₽</Text>*/}
            {/*</Container>*/}
        </ItemContainer>
    );
};

export default VacationItem;

const ItemContainer = styled(Container)`
    border-bottom-width: 1px;
    border-bottom-color: #d7d8d9;
`;
