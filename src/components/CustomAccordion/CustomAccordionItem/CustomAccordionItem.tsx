import moment from 'moment';
import * as React from 'react';
import { List } from 'react-native-paper';
import styled from 'styled-components/native';
import { Container, Text } from '../../Styled';
import {
    ArrowDownIcon,
    ArrowUpIcon,
    CommentIcon,
    TimeIcon,
    UserIcon,
} from '../../../constants/icons';
import { COLORS } from '../../../constants/theme';
import { Props } from './CustomAccordionItem.types';

const CustomAccordionItem = ({ item }: Props) => {
    const [expanded, setExpanded] = React.useState(false);
    function hoursMinutes(min: number) {
        const m = min % 60;
        const h = (min - m) / 60;
        return {
            hours: h,
            minutes: m,
        };
    }

    const handlePress = () => setExpanded(!expanded);

    const minutes = hoursMinutes(item.spent_time).minutes;
    const hours = hoursMinutes(item.spent_time).hours;

    const SpentTime = () => {
        return (
            <>
                <Text>{`${hours} часов `}</Text>
                <Text>{`${minutes} минут`}</Text>
            </>
        );
    };

    const createdDate = moment(item.updated_at).format(
        'DD.MM.YYYY г. HH:mm:ss',
    );

    return (
        <Accordion
            title={<SpentTime />}
            expanded={expanded}
            onPress={handlePress}
            right={() =>
                expanded == true ? (
                    <ArrowUpIcon fill={COLORS.lightAccent} />
                ) : (
                    <ArrowDownIcon fill={COLORS.lightAccent} />
                )
            }>
            <Container
                row
                pv={30}
                ph={15}
                mb={8}
                pt={10}
                jc={'space-between'}
                ai={'center'}
                bc={COLORS.gray}>
                <Container bc={COLORS.gray}>
                    <Text fs={15} mb={5} color={COLORS.inactiveIcon}>
                        Дата:
                    </Text>
                    <Text>{createdDate}</Text>
                </Container>
                <TimeIcon fill={COLORS.lightAccent} />
            </Container>

            <Container
                row
                pv={20}
                ph={15}
                pt={10}
                mb={8}
                jc={'space-between'}
                ai={'center'}
                bc={COLORS.gray}>
                <Container bc={COLORS.gray}>
                    <Text fs={15} mb={4} color={COLORS.inactiveIcon}>
                        Проект:
                    </Text>
                    <Text>
                        {item.project_name?.length
                            ? item.project_name
                            : 'без имени'}
                    </Text>
                </Container>
                <UserIcon fill={COLORS.lightAccent} />
            </Container>

            <Container
                row
                pv={20}
                ph={15}
                pt={10}
                mb={8}
                jc={'space-between'}
                ai={'center'}
                bc={COLORS.gray}>
                <Container bc={COLORS.gray}>
                    <Text fs={15} mb={4} color={COLORS.inactiveIcon}>
                        Комментарий:
                    </Text>
                    <Text>
                        {item.comment?.length
                            ? item.comment
                            : 'нет комментария'}
                    </Text>
                </Container>
                <CommentIcon fill={COLORS.lightAccent} />
            </Container>
        </Accordion>
    );
};

export default CustomAccordionItem;

const Accordion = styled(List.Accordion)`
    border-bottom-color: #d7d8d9;
    border-bottom-width: 1px;
    background-color: #ffffff;
`;
