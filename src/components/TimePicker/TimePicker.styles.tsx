import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    customDatePickerContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#F2F2F2',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 44,
    },
    setOpenButton: {
        width: '100%',
    },
    placeholderWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    icon: {
        width: 24,
        height: 24,
    },
});

export default styles;
