import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Container, Text } from '../../../components/Styled';
import { COLORS } from '../../../constants/theme';
import { Props } from './CheckBox.types';
import Checkbox from '@react-native-community/checkbox';
const CheckBox = ({ name }: Props) => {
    const [checked, setChecked] = useState(false);

    return (
        <CheckBoxContainer row jc="space-between" ai="center" height={77}>
            <Text>{name}</Text>
            <Checkbox
                value={checked ? true : false}
                onValueChange={() => {
                    setChecked(!checked);
                }}
                style={{ marginRight: 10 }}
            />
        </CheckBoxContainer>
    );
};

export default CheckBox;

const CheckBoxContainer = styled(Container)`
    border-top-width: 1px;
    border-top-color: ${COLORS.lightSeparator};
`;
