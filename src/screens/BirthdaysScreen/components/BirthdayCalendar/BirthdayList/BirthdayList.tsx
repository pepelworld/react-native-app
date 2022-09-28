import Moment from 'moment';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { Container, Text } from '../../../../../components/Styled';
import { COLORS } from '../../../../../constants/theme';
import ProfileService from '../../../../../service/ProfileService/ProfileService';

const BirthdayList = () => {
    const [birthdays, setBirthdays] = React.useState<
        { id: string; name: string; birth_date: string }[]
    >([]);

    useEffect(() => {
        let fromDate = new Date();
        let toDate = new Date();
        toDate.setMonth(toDate.getMonth() + 3);
        let getBirthdayDataReqParams = {
            date_from: fromDate.toLocaleString(),
            date_to: toDate.toLocaleString(),
            page: 1,
            limit: 100,
        };
        try {
            ProfileService.getBirthdayList({ getBirthdayDataReqParams }).then(
                res => {
                    const resp = res.data.workers.data.map(
                        (i: { [key: string]: string }) => ({
                            ...i,
                            birth_date: Moment(i.birth_date).set('year', 2013),
                            name:
                                i.first_name !== null && i.second_name !== null
                                    ? i.first_name + ' ' + i.second_name
                                    : i.name,
                        }),
                    );

                    setBirthdays(
                        resp.sort(
                            (
                                a: {
                                    birth_date: string;
                                },
                                b: {
                                    birth_date: string;
                                },
                            ) =>
                                new Date(a.birth_date).getTime() -
                                new Date(b.birth_date).getTime(),
                        ),
                    );
                },
            );
        } catch {
            console.log('error');
        }
    }, []);

    const BirthdayItem = ({ name, date }: { [key: string]: string }) => (
        <Container row jc={'space-between'} ai={'center'} mt={16}>
            <Text width={250}>{name}</Text>
            <Text color={COLORS.lightText}>{date}</Text>
        </Container>
    );

    return (
        <FlatList
            data={birthdays}
            renderItem={({ item }) => (
                <BirthdayItem
                    name={`${item.name}`}
                    date={Moment(item.birth_date).format('DD.MM')}
                />
            )}
            keyExtractor={item => item.id}
        />
    );
};

export default BirthdayList;
