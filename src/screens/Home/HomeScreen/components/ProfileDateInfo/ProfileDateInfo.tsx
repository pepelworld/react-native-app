import Moment from 'moment';
import React from 'react';
import styled from 'styled-components/native';
import { Container } from '../../../../../components/Styled';
import { COLORS } from '../../../../../constants/theme';
import { store } from '../../../../../store/RootStore';
import CreateUpdateInfo from './CreatedUpdatedInfo/CreatedUpdatedInfo';

const ProfileDateInfo = () => {
    return (
        <Wrapper row jc={'space-evenly'} height={80} >
            <CreateUpdateInfo
                title={'Создан:'}
                date={`${Moment(store.user.created_at).format('DD.MM.YYYY')} `}
            />
            <CreateUpdateInfo
                title={'Обновлен:'}
                date={`${Moment(store.user.updated_at).format('DD.MM.YYYY')} `}
            />
        </Wrapper>
    );
};

export default ProfileDateInfo;

const Wrapper = styled(Container)`
    border-top-width: 1px;
    border-top-color: ${COLORS.lightSeparator};
`;
