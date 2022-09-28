import React from 'react';
import { useController } from 'react-hook-form';
import { EyeIcon } from '../../constants/icons';
import { Container } from '../Styled';
import { Props } from './Input.types';
import { EyeOpacity, Text, TextInput, Wrapper } from './Input.styles';

export const Input = ({
    placeholder,
    width,
    secureField,
    onPress,
    secureTextEntry,
    control,
    name,
    children,
    height,
}: Props) => {
    const { field } = useController({
        control,
        defaultValue: '',
        name,
    });

    return (
        <Container bc={'transparent'}>
            <Container width={'100%'} bc={'transparent'}>
                <Text>{children}</Text>
            </Container>

            <Wrapper>
                <TextInput
                    placeholder={placeholder}
                    value={field.value}
                    onChangeText={field.onChange}
                    autoCorrect={false}
                    autoCapitalize="none"
                    secureTextEntry={secureTextEntry}
                    enablesReturnKeyAutomatically
                    width={width}
                    height={height}
                />
                {secureField && (
                    <EyeOpacity onPress={onPress}>
                        <EyeIcon fill={'white'} />
                    </EyeOpacity>
                )}
            </Wrapper>
        </Container>
    );
};

export default Input;
