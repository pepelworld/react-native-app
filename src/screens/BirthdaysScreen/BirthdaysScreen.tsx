import Moment from 'moment';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Avatar, Container, Search, Text } from '../../components/Styled';
import { COLORS } from '../../constants/theme';
import BirthdaysService from '../../service/BirthdaysService/BirthdaysService';
import ProfileService from "../../service/ProfileService/ProfileService";

const BirthdaysScreen = () => {
    const [query, setQuery] = useState<string>('');
    const [birthdaysItems, setBirthdaysItems] = useState<
        { id: string; name: string; birth_date: string; avatar: string }[]
    >([]);

    const handleSearch = (text: string) => {
        setQuery(text);
    };
    const filteredItems = birthdaysItems.filter(item => {
        if (query == '') {
            return item;
        } else {
            return item.name.toLowerCase().includes(query.toLowerCase());
        }
    });

    useEffect(() => {
        let fromDate = new Date('2022');
        let toDate = new Date('2022');
        toDate.setDate(fromDate.getDate() + 364);

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
                            id: i.id,
                            birth_date: Moment(i.birth_date).set('year', 2022),
                            name:
                                i.first_name !== null && i.second_name !== null
                                    ? i.first_name + ' ' + i.second_name
                                    : i.name,
                        }),
                    );
                    const sortedData = resp.sort(
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
                    );
                    setBirthdaysItems(sortedData);
                },
            );
        } catch (e) {
            console.log('error', e);
        }
    }, []);

    const BirthdayItem = ({
        name,
        birth_date,
        avatar,
    }: {
        [key: string]: string;
    }) => (
        <Wrapper row height={105} jc={'flex-start'} ai={'center'}>
            <Avatar
                width={55}
                height={55}
                source={{
                    uri: avatar,
                }}
            />
            <Container ml={25}>
                <Text bold width={250}>
                    {name}
                </Text>
                <Text color={COLORS.lightText}>{birth_date}</Text>
            </Container>
        </Wrapper>
    );

    return (
        <Container fl ph>
            <Container mt={10.5}>
                <Search
                    placeholderText="Поиск"
                    searchPhrase={query}
                    setSearchPhrase={handleSearch}
                />
            </Container>
            <Container fl>
                <FlatList
                    data={filteredItems}
                    renderItem={({ item }) => (
                        <BirthdayItem
                            avatar={item.avatar}
                            name={item.name}
                            birth_date={Moment(item.birth_date).format('DD.MM')}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </Container>
        </Container>
    );
};

export default BirthdaysScreen;

const Wrapper = styled(Container)`
    border-bottom-color: ${COLORS.lightSeparator};
    border-bottom-width: 1px;
`;
