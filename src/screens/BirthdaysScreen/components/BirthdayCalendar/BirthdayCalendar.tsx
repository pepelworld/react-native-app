import React, { Suspense } from 'react';
import styled from 'styled-components/native';
import { Container, Text } from '../../../../components/Styled';
import { CalendarIcon } from '../../../../constants/icons';
import { COLORS } from '../../../../constants/theme';
const BirthdayList = React.lazy(() => import('./BirthdayList/BirthdayList'));
import LoadSpinner from '../../../../components/LoadSpinner/LoadSpinner';

const BirthdayCalendar = () => {
    return (
        <Container fl>
            <Wrapper row ai={'center'} height={80}>
                <CalendarIcon fill={COLORS.lightAccent} />
                <Title>Ближайшие дни рождения</Title>
            </Wrapper>
            <Suspense fallback={<LoadSpinner />}>
                <BirthdayList />
            </Suspense>
        </Container>
    );
};

export default BirthdayCalendar;

const Wrapper = styled(Container)`
    border-top-width: 1px;
    border-top-color: ${COLORS.lightSeparator};
    border-bottom-width: 1px;
    border-bottom-color: ${COLORS.lightSeparator};
`;

const Title = styled(Text)`
    margin-left: 13px;
`;
