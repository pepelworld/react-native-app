import React from 'react';

export interface ButtonProps {
    children?: React.ReactNode;
    onPress: () => void;
    width?: number | string;
    height?: number;
    marginTop?: number | string;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
    radius?: number;
}
