import React, { useEffect, useLayoutEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Search from '../../components/Styled/Search/Search';
import { Container } from '../../components/Styled';
import { FiltersIcon } from '../../constants/icons';
import { COLORS } from '../../constants/theme';
import { headerRightContainerStyle } from '../../navigation/styles/headerStyles';
import TransactionsList from './components/TransactionsList/TransactionsList';
import FilterModal from './modals/FilterModal';
import {
    GetTransactionsDataReqParams,
    Props,
} from './TransactionsScreen.types';
import TransactionService from '../../service/TransactionService/TransactionService';
import ProfileService from "../../service/ProfileService/ProfileService";

const Transactions = ({ navigation }: Props) => {
    const [transactionsData, setTransactionsData] = useState([]);

    const [dateFrom, setDateFrom] = useState(new Date('2022'));
    const [openDateFromModalPickerModal, setOpenDateFromModalPickerModal] =
        useState(false);

    const [dateTo, setDateTo] = useState(new Date());
    const [openDateToDatePickerModal, setOpenDateToDatePickerModal] =
        useState(false);

    const [searchPhrase, setSearchPhrase] = useState('');
    const searchFieldPlaceholder = 'Поиск';
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    async function getTransactionsData({
        getTransactionsDataReqParams,
    }: GetTransactionsDataReqParams) {
        const response = await ProfileService.getTransactionsDataReq({
            getTransactionsDataReqParams,
        });
        return response.data.transactions;
    }

    let yearAgo = new Date();
    yearAgo.setFullYear(yearAgo.getFullYear() - 1);

    let getTransactionsDataReqParams = {
        'filterData[date_from]': yearAgo.toLocaleString(),
        'filterData[date_to]': dateTo.toLocaleString(),
        page: 1,
        limit: 100,
    };

    useEffect(() => {
        getTransactionsData({ getTransactionsDataReqParams }).then(res =>
            setTransactionsData(res.data),
        );
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => toggleModal()}
                    style={{
                        width: 48,
                        height: 48,
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                    }}>
                    <FiltersIcon fill={COLORS.lightAccent} />
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
            <FilterModal
                dateFrom={dateFrom}
                setDateFrom={setDateFrom}
                openDateFromModalPickerModal={openDateFromModalPickerModal}
                setOpenDateFromModalPickerModal={
                    setOpenDateFromModalPickerModal
                }
                dateTo={dateTo}
                setDateTo={setDateTo}
                openDateToDatePickerModal={openDateToDatePickerModal}
                setOpenDateToDatePickerModal={setOpenDateToDatePickerModal}
                getTransactionsData={getTransactionsData}
                setTransactionsData={setTransactionsData}
                isModalVisible={isModalVisible}
                toggleModal={toggleModal}
            />
            <Container mt={10.5}>
                <Search
                    searchPhrase={searchPhrase}
                    setSearchPhrase={setSearchPhrase}
                    placeholderText={searchFieldPlaceholder}
                />
            </Container>
            <Container fl>
                <TransactionsList
                    searchPhrase={searchPhrase}
                    transactionsList={transactionsData}
                />
            </Container>
        </Container>
    );
};

export default Transactions;
