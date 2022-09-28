import { TouchableOpacity } from 'react-native';
import { COLORS } from '../../../../constants/theme';
import { NotificationsIcon } from '../../../../constants/icons';
import { Container, Text } from '../../../../components/Styled';
import React from 'react';
import styled from 'styled-components/native';
import { Props } from './NotificationsItem.types';

const NotificationsItem = ({ notification, onPress, onLongPress }: Props) => (
    <TouchableOpacity
        delayLongPress={50}
        onLongPress={onLongPress}
        onPress={onPress}>
        <ItemContainer
            row
            pt={10}
            jc="space-between"
            ai="center"
            pv
            bc={notification.selected && COLORS.lightSeparator}>
            <NotificationsIcon
                style={{ marginRight: 30 }}
                fill={
                    notification.isRead ? COLORS.inactiveIcon : COLORS.lightBlue
                }
            />
            <Text>{notification.description}</Text>
        </ItemContainer>
    </TouchableOpacity>
);

export default NotificationsItem;

const ItemContainer = styled(Container)`
    border-bottom-width: 1px;
    border-bottom-color: ${COLORS.lightSeparator};
`;
