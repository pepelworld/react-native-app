import styled from 'styled-components/native';

const Image = styled.Image<{
    width: number;
    height: number;
}>`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
`;

export default Image;
