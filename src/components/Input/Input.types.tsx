import React from 'react';

export interface Props {
    children?: React.ReactNode;
    onPress?: () => void;
    value?: string;
    placeholder?: string;
    secureField?: boolean;
    secureTextEntry?: boolean;
    control?: any;
    name: string;
    width?: number;
    height?: number;
    onChangeText?: () => void;
}
