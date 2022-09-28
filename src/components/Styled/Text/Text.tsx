import styled from 'styled-components/native';
import { COLORS, FONTS, SIZES } from '../../../constants/theme';

const Text = styled.Text<{
    color?: string;
    fs?: number;
    width?: number;
    height?: number;
    bold?: boolean;
    regular?: boolean;
    mt?: number; // margin-top
    mr?: number; // margin-right
    mb?: number; // margin-bottom
    ml?: number; // margin-left
    textAlign?: string;
}>`
    color: ${props => (props.color ? props.color : COLORS.black)};
    font-size: ${props => (props.fs ? props.fs : SIZES.font)}px;
    font-family: ${FONTS.fontFamily};
    font-weight: ${props =>
        props.bold ? '700' : props.regular ? '400' : '400'}
    width: ${props => (props.width ? props.width + 'px' : 'auto')};
    height: ${props => (props.height ? props.height + 'px' : 'auto')};
    margin-top: ${props => (props.mt !== undefined ? props.mt : '0')}px;
    margin-right: ${props => (props.mr !== undefined ? props.mr : '0')}px;
    margin-bottom: ${props => (props.mb !== undefined ? props.mb : '0')}px;
    margin-left: ${props => (props.ml !== undefined ? props.ml : '0')}px;
    text-align: ${props => (props.textAlign ? props.textAlign : 'left')} 
`;

export default Text;
