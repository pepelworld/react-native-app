import React from 'react';
import styled from 'styled-components/native';
import { COLORS } from '../../constants/theme';
import Switch from '../CustomSwitch/Switch';
import { Container, Text } from '../Styled';

const Notifications = () => {
    return (
        <Wrapper row height={77} jc={'space-between'} ai={'center'}>
            <Text>Уведомления</Text>
            <Switch />
        </Wrapper>
    );
};

export default Notifications;

const Wrapper = styled(Container)`
    border-bottom-color: ${COLORS.lightSeparator};
`;
