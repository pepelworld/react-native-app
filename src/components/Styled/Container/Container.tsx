import styled from 'styled-components/native';
import { COLORS, SIZES } from '../../../constants/theme';

const Container = styled.View<{
    fl?: boolean; // flex
    row?: boolean;
    width?: number | string;
    height?: number;
    bc?: string | boolean | {}; // background-color
    ph?: boolean | number; // padding-horizontal
    pv?: boolean | number; // padding-vertical
    pt?: boolean | number; // padding-top
    ai?: string; // align-items
    jc?: string; // justify-content
    mt?: number; // margin-top
    mr?: number; // margin-right
    mb?: number; // margin-bottom
    ml?: number; // margin-left
}>`
    flex: ${props => (props.fl ? '1' : '0 1 auto')};
    flex-direction: ${props => (props.row ? 'row' : 'column')};
    width: ${props =>
        props.width && typeof props.width === 'number'
            ? props.width + 'px'
            : props.width !== undefined
            ? props.width
            : 'auto'};
    height: ${props => (props.height ? props.height + 'px' : 'auto')};
    padding: ${props =>
        props.pv ? SIZES.padding : props.pv !== undefined ? props.pv : 0}px
        ${props =>
            props.ph ? SIZES.padding : props.ph !== undefined ? props.ph : 0}px;
    padding-top: ${props =>
        props.pt ? SIZES.padding : props.pt !== undefined ? props.pt : 0}px;
    background-color: ${props =>
        props.bc && props.bc !== undefined ? props.bc : COLORS.white};
    align-items: ${props =>
        props.ai && props.ai !== undefined ? props.ai : 'stretch'};
    justify-content: ${props =>
        props.jc && props.jc !== undefined ? props.jc : 'flex-start'};
    margin-top: ${props => (props.mt !== undefined ? props.mt : '0')}px;
    margin-right: ${props => (props.mr !== undefined ? props.mr : '0')}px;
    margin-bottom: ${props => (props.mb !== undefined ? props.mb : '0')}px;
    margin-left: ${props => (props.ml !== undefined ? props.ml : '0')}px;
`;

export default Container;
