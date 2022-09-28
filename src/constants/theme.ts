import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
    black: '#000000',
    white: '#FFFFFF',
    gray: '#F2F2F2',
    lightBlue: '#4986CC',
    lightSeparator: '#D7D8D9',
    lightText: '#818C99',
    lightAccent: '#3F8AE0',
    loader: '#2674CC',
    inactiveIcon: '#99A2AD',
};
export const SIZES = {
    // global sizes
    font: 18,
    padding: 17,

    // font sizes
    h1: 24,
    h2: 22,
    h3: 18,
    h4: 14,
    body1: 24,
    body2: 22,
    body3: 18,
    body4: 15,

    // app dimensions
    width,
    height,
};
export const FONTS = {
    fontFamily: 'NunitoSans-Regular',
    largeTitle: {
        fontFamily: 'NunitoSans-Bold',
        fontSize: SIZES.h1,
        lineHeight: 39.6,
        fontWeight: '700',
    },
    h1: {
        fontFamily: 'NunitoSans-Bold',
        fontSize: SIZES.h1,
        lineHeight: 36,
        fontWeight: '700',
    },
    h2: {
        fontFamily: 'NunitoSans-Bold',
        fontSize: SIZES.h2,
        lineHeight: 30,
        fontWeight: '700',
    },
    h3: {
        fontFamily: 'NunitoSans-Bold',
        fontSize: SIZES.h3,
        lineHeight: 22,
        fontWeight: '700',
    },
    h4: {
        fontFamily: 'NunitoSans-Bold',
        fontSize: SIZES.h4,
        lineHeight: 22,
        fontWeight: '700',
    },
    body1: {
        fontFamily: 'NunitoSans-Regular',
        fontSize: SIZES.body1,
        lineHeight: 36,
    },
    body2: {
        fontFamily: 'NunitoSans-Regular',
        fontSize: SIZES.body2,
        lineHeight: 30,
    },
    body3: {
        fontFamily: 'NunitoSans-Regular',
        fontSize: SIZES.body3,
        lineHeight: 30,
    },
    body4: {
        fontFamily: 'NunitoSans-Regular',
        fontSize: SIZES.body4,
        lineHeight: 22,
    },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
