import styled from 'styled-components/native';
import { COLORS, FONTS } from '../../constants/theme';

export const Wrapper = styled.View`
    align-items: center;
`;

export const Text = styled.Text`
    font-size: ${FONTS.body3.fontSize}px;
    color: ${COLORS.black};
    margin-top: 12px;
    height: 30px;
    margin-bottom: 8px;
`;

export const TextInput = styled.TextInput<{
    width?: number;
    height?: number;
}>`
    background-color: ${COLORS.white};
    border-radius: 10px;
    height: ${props => (props.height ? props.height : '44')}px;
    padding-left: 12px;
    border-width: 1px;
    border-color: ${COLORS.lightSeparator};
    margin-bottom: 12px;
    width: ${props => (props.width ? props.width + 'px' : '100%')};
`;

export const EyeOpacity = styled.TouchableOpacity`
    position: absolute;
    right: 11.5px;
    top: 10px;
`;
