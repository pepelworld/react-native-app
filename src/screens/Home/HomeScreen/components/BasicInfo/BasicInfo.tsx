import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Avatar, Container, Text } from '../../../../../components/Styled';
import { EditIcon } from '../../../../../constants/icons';
import { COLORS } from '../../../../../constants/theme';
import { BasicInfoProps } from './BasicInfo.types';
import styled from 'styled-components/native';

const BasicInfo = ({ name, email, navigation }: BasicInfoProps) => {
    const onPressEdit = () => {
        navigation.navigate('Редактировать');
    };

    return (
        <Wrapper row jc={'space-between'} ai={'center'}>
            <Container row ai={'center'}>
                <Avatar
                    width={70}
                    height={70}
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/ru/5/5f/Original_Doge_meme.jpg?20140214170515',
                    }}
                />
                <Container ml={15}>
                    <Text color={COLORS.black} fs={18}>
                        {name}
                    </Text>
                    <Text color={COLORS.lightText} fs={14}>
                        {email}
                    </Text>
                </Container>
            </Container>
            <TouchableOpacity
                onPress={onPressEdit}
                style={{
                    width: 48,
                    height: 48,
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    marginRight: 10,
                }}>
                <EditIcon fill={COLORS.inactiveIcon} />
            </TouchableOpacity>
        </Wrapper>
    );
};

export default BasicInfo;

const Wrapper = styled(Container)`
    border-bottom-width: 1px;
    border-bottom-color: ${COLORS.lightSeparator};
    padding-bottom: 15px;
`;
