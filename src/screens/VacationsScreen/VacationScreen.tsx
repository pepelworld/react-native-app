import React, { useEffect, useLayoutEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container } from '../../components/Styled';
import { BackIcon, PlusIcon } from '../../constants/icons';
import { COLORS } from '../../constants/theme';
import { headerRightContainerStyle } from '../../navigation/styles/headerStyles';
import { GetVacationsDataReqParams, Props } from './VacationScreen.types';
import VacationsList from './components/VacationList/VacationList';
import ProfileService from '../../service/ProfileService/ProfileService';

const Vacations = ({ navigation }: Props) => {
    const [vacationsData, setVacationsData] = useState([]);

    // const [dateTo, setDateTo] = useState(new Date());

    async function getVacationsData({
        getVacationsDataReqParams,
    }: GetVacationsDataReqParams) {
        const response = await ProfileService.getVacationsListReq({
            getVacationsDataReqParams,
        });
        return response.data;
    }

    let dateTo = new Date();
    let yearAgo = new Date();
    yearAgo.setFullYear(yearAgo.getFullYear() - 5);

    let getVacationsDataReqParams = {
        'filterData[date_from]': yearAgo.toLocaleString(),
        'filterData[date_to]': dateTo.toLocaleString(),
    };

    useEffect(() => {
        getVacationsData({ getVacationsDataReqParams }).then(res =>
            setVacationsData(res.data),
        );
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        width: 48,
                        height: 48,
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                    }}>
                    <BackIcon fill={COLORS.lightAccent} />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Добавить отпуск')}
                    style={{
                        width: 48,
                        height: 48,
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                    }}>
                    <PlusIcon fill={COLORS.lightAccent} />
                </TouchableOpacity>
            ),
            headerRightContainerStyle: {
                ...headerRightContainerStyle,
                justifyContent: 'flex-end',
            },
        });
    }, [navigation]);

    return (
        <Container fl ph>
            <VacationsList vacationsList={vacationsData} />
        </Container>
    );
};

export default Vacations;
