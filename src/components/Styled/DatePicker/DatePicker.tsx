import React from 'react';
import { TouchableHighlight } from 'react-native';
import DatePicker from 'react-native-date-picker';
import styled from 'styled-components/native';
import { CalendarIcon } from '../../../constants/icons';
import { COLORS } from '../../../constants/theme';
import { Props } from './DatePicker.types';

const DatePickerWindow = ({ date, setDate, open, setOpen, text }: Props) => {
    return (
        <DatePickerContainer>
            <TouchableHighlight
                onPress={() => setOpen(true)}
                underlayColor="#EBEDF0">
                <Placeholder>{`${text}: ${date.toLocaleString()}`}</Placeholder>
            </TouchableHighlight>
            <CalendarIcon fill={COLORS.lightAccent} />
            <DatePicker
                modal={true}
                mode="date"
                open={open}
                // @ts-ignore
                date={date}
                onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                }}
                onCancel={() => {
                    setOpen(false);
                }}
            />
        </DatePickerContainer>
    );
};

export default DatePickerWindow;

const DatePickerContainer = styled.View`
    background-color: ${COLORS.gray};
    border-radius: 10px;
    border-width: 1px;
    border-color: ${COLORS.lightSeparator};
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Placeholder = styled.Text`
    color: ${COLORS.black};
`;
