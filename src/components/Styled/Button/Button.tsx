import React from 'react';
import styled from 'styled-components/native';
import { COLORS } from '../../../constants/theme';
import { ButtonProps } from './Button.types';
import Text from '../Text/Text';

const Button = ({
    children,
    onPress,
    width,
    height,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
}: ButtonProps) => {
    return (
        <ButtonWrapper
            onPress={onPress}
            width={width}
            height={height}
            marginTop={marginTop}
            marginRight={marginRight}
            marginBottom={marginBottom}
            marginLeft={marginLeft}>
            <Text color={COLORS.white}>{children}</Text>
        </ButtonWrapper>
    );
};

export default Button;

const ButtonWrapper = styled.TouchableOpacity<ButtonProps>`
    background-color: ${COLORS.lightBlue};
    border-radius: ${props =>
        props.radius !== undefined ? props.radius : 10}px;
    justify-content: center;
    align-items: center;
    width: ${props =>
        props.width !== undefined && typeof props.width == 'number'
            ? props.width + 'px'
            : typeof props.width == 'string'
            ? props.width
            : '100%'};
    height: ${props => (props.height ? props.height : 44)}px;
    margin-top: ${props =>
        props.marginTop !== undefined ? props.marginTop : '0'}px;
    margin-right: ${props =>
        props.marginRight !== undefined ? props.marginRight : '0'}px;
    margin-bottom: ${props =>
        props.marginBottom !== undefined ? props.marginBottom : '0'}px;
    margin-left: ${props =>
        props.marginLeft !== undefined ? props.marginLeft : '0'}px;
`;
