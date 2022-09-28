import { FONTS, SIZES } from '../../constants/theme';

export const headerShown: boolean = true;

export const headerTitleAlign = 'center';

export const headerStyle = {
    backgroundColor: 'white',
};

export const headerTitleStyle: {} = {
    fontFamily: FONTS.h1.fontFamily,
    fontSize: FONTS.h1.fontSize,
    fontWeight: FONTS.h1.fontWeight,
};

export const headerTitleContainerStyle: {} = {
    width: 200,
    alignItems: 'center',
};

export const headerLeftContainerStyle: {} = {
    paddingLeft: SIZES.padding,
};
export const headerRightContainerStyle: {} = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: SIZES.padding,
};

export const headerTheme: {} = {
    headerShown,
    headerLeftContainerStyle,
    headerRightContainerStyle,
    headerTitleAlign,
    headerTitleStyle,
    headerTitleContainerStyle,
    headerStyle,
};
