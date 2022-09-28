import { Button, Container, Text } from '../Styled';
import Modal from 'react-native-modal';
import React, { useEffect, useState } from 'react';
import { store } from '../../store/RootStore';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components/native';

const ErrorWindow = () => {
    useEffect(() => {
        if (store.requestError) {
            setModalVisible(true);
        }
    }, [store.requestError]);

    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <Modal isVisible={modalVisible}>
            <SectionContainer>
                <Container row ph ai={'center'} jc={'center'} mb={20}>
                    <Text textAlign={'center'}>{store.requestError}</Text>
                </Container>
                <Container ph>
                    <Button onPress={toggleModal}>ОК</Button>
                </Container>
            </SectionContainer>
        </Modal>
    );
};

export default observer(ErrorWindow);

const SectionContainer = styled(Container)`
    border-radius: 18px;
    padding: 16px;
`;
