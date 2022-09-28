import React from 'react';
import { Text } from 'react-native';
import styles from './HookFormError.styles';
import { Props } from './HookFormError.types';

const HookFormError = ({ error, errorMessage }: Props) => {
    return <>{error && <Text style={styles.error}>{errorMessage}</Text>}</>;
};

export default HookFormError;
