import React from 'react';
import { TouchableHighlight } from 'react-native';
import { Props } from './TimePicker.types';
import styles from './TimePicker.styles';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import { CalendarIcon, TimeIcon } from '../../constants/icons';
import { COLORS } from '../../constants/theme';
import { Container, Text } from '../Styled';

const TimePicker = ({ date, setDate, open, setOpen, isDate }: Props) => {
    return (
        <Container style={styles.customDatePickerContainer}>
            <TouchableHighlight
                style={styles.setOpenButton}
                onPress={() => setOpen(true)}
                underlayColor="#FFFFFF">
                <Container row jc="space-between" ph>
                    <Text>
                        {isDate
                            ? moment(date).format('DD.MM.YYYY')
                            : moment(date).format('HH:mm')}
                    </Text>
                    {isDate ? (
                        <CalendarIcon fill={COLORS.lightAccent} />
                    ) : (
                        <TimeIcon fill={COLORS.lightAccent} />
                    )}
                </Container>
            </TouchableHighlight>
            <DatePicker
                modal
                title={isDate ? 'Выберите дату' : 'Выберите время'}
                mode={isDate ? 'date' : 'time'}
                open={open}
                androidVariant="iosClone"
                locale={'ru'}
                is24hourSource="locale"
                // @ts-ignore
                date={date}
                onConfirm={data => {
                    setOpen(false);
                    setDate(data);
                }}
                onCancel={() => {
                    setOpen(false);
                }}
                confirmText={'Выбрать'}
                cancelText={'Отмена'}
            />
        </Container>
    );
};

export default TimePicker;
