import React from 'react';
import { Container, Text } from '../../../../../../components/Styled';
import { COLORS } from '../../../../../../constants/theme';
import { Props } from './CreatedUpdatedInfo.types';

const CreateUpdateInfo = ({ title, date }: Props) => {
    return (
        <Container jc={'center'} ai={'center'} mr={40} ml={40}>
            <Text>{title}</Text>
            <Text color={COLORS.lightText}>{date}</Text>
        </Container>
    );
};

export default CreateUpdateInfo;
