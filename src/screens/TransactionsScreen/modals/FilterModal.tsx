import React from 'react';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import { Button, Container, Text } from '../../../components/Styled';
import DatePicker from '../../../components/Styled/DatePicker/DatePicker';
import { Props } from './FilterModal.types';

const FilterModal = ({
    dateFrom,
    setDateFrom,
    openDateFromModalPickerModal,
    setOpenDateFromModalPickerModal,
    dateTo,
    setDateTo,
    openDateToDatePickerModal,
    setOpenDateToDatePickerModal,
    getTransactionsData,
    setTransactionsData,
    toggleModal,
    isModalVisible,
}: Props) => {
    let getTransactionsDataReqParams = {
        'filterData[date_from]': dateFrom.toLocaleString(),
        'filterData[date_to]': dateTo.toLocaleString(),
        page: 1,
        limit: 100,
    };

    function getTransactionsDataHandler() {
        toggleModal();
        getTransactionsData({ getTransactionsDataReqParams }).then(
            (res: any) => {
                setTransactionsData(res.data);
            },
        );
    }

    return (
        <Modal isVisible={isModalVisible}>
            <SectionContainer>
                <Container row jc="center" ai="center">
                    <Text textAlign="center" mb={20} bold>
                        Показать платежи
                    </Text>
                </Container>
                <Container mb={12}>
                    <DatePicker
                        date={dateFrom}
                        setDate={setDateFrom}
                        open={openDateFromModalPickerModal}
                        setOpen={setOpenDateFromModalPickerModal}
                        text={dateFrom ? 'C' : dateFrom}
                    />
                </Container>
                <Container mb={12}>
                    <DatePicker
                        date={dateTo}
                        setDate={setDateTo}
                        open={openDateToDatePickerModal}
                        setOpen={setOpenDateToDatePickerModal}
                        text={dateTo ? 'По' : dateTo}
                    />
                </Container>
                <Container row jc="space-between">
                    <Button onPress={getTransactionsDataHandler} width={150}>
                        Ок
                    </Button>
                    <Button onPress={toggleModal} width={150}>
                        Отмена
                    </Button>
                </Container>
            </SectionContainer>
        </Modal>
    );
};

export default FilterModal;

const SectionContainer = styled(Container)`
    border-radius: 18px;
    padding: 16px;
`;
