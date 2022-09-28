import React from 'react';
import Notifications from '../../../components/Notifications/Notifications';
import { Container } from '../../../components/Styled';
import { store } from '../../../store/RootStore';
import BirthdayCalendar from '../../BirthdaysScreen/components/BirthdayCalendar/BirthdayCalendar';
import BasicInfo from './components/BasicInfo/BasicInfo';
import ProfileDateInfo from './components/ProfileDateInfo/ProfileDateInfo';
import { Props } from './HomeScreen.types';
import { SIZES } from '../../../constants/theme';

const HomeScreen = ({ navigation }: Props) => {
    return (
        <Container fl ph>
            <Container mt={SIZES.padding}>
                <BasicInfo
                    name={`${store.user.second_name} ${store.user.first_name}`}
                    email={`${store.user.email}`}
                    navigation={navigation}
                />
            </Container>
            <Notifications />
            <ProfileDateInfo />
            <BirthdayCalendar />
        </Container>
    );
};

export default HomeScreen;
