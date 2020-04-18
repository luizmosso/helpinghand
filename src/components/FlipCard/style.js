import styled, { css } from 'styled-components'

export const Card = styled.div`
  position: absolute;
  width: ${({ width }) => width !== undefined ? width : '100%'};
  height: ${({ height }) => height !== undefined ? height : '100%'};
  ${({top}) => css`top: ${top};`}
  ${({right}) => css`right: ${right};`}
  
  transition: transform 0.6s;
  transform-style: preserve-3d;
  ${({ flip }) => flip && flip === true && css`transform: rotateY(180deg);`}
`
const FrontAndBack = (width, height) => css`
  height: ${height};
  width: ${width};
  border-radius: 1000px;
  position: absolute;
  
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

export const Front = styled.div`
  ${({width, height}) => FrontAndBack(width, height)}
  transform: rotateY(180deg);
`

export const Back = styled.div`  
  ${({width, height}) => FrontAndBack(width, height)}
  
`