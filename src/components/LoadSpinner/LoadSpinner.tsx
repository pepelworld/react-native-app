import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { COLORS } from '../../constants/theme';

const LoadSpinner = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator size="large" color={COLORS.lightAccent} />
        </View>
    );
};

export default LoadSpinner;
