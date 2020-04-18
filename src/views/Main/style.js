import styled, { css } from 'styled-components'
import { colors } from '../../content/theme'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

export const AbsoluteContainer = styled.div`
  width: 95%;
  height: 80%;
  position: absolute;
  transition: transform .35s ease-in-out;
  ${({slide}) => slide && slide === true && css`transform: translateX(60%);`}
`;

export const InnerContainer = styled.div`
  background: ${colors.white};
  width: 100%;
  height: 100%;
  border-radius: 30px;
  padding: 15px;
  box-sizing: border-box;
  box-shadow: 0px 48px 35px -30px ${colors.black}70;
  position: relative;
`;

export const ProfileFace = styled.img`
    border-radius: 100%;
    background: ${colors.blue};
    padding: 1px;
    border: 3px solid white;
    width: 50px;
`

export const Absolute = styled.div`
  position: absolute;
  ${({top}) => top && css`top ${top};`};
  ${({left}) => left && css`left ${left};`};
  ${({right}) => right && css`right ${right};`};
  ${({bottom}) => bottom && css`bottom ${bottom};`};
`;

export const OuterContainer = styled.div`
  height: 70%;
  width: 52%;
  margin-left: 5%;
  align-self: flex-start;
  padding-top: 30px;
`

export const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  ${({marginLeft}) => marginLeft && css`margin-left : ${marginLeft}`}
`

export const ProfileName = styled.p`
  color: white;
  margin-left: 5px;
  font-weight: bold;
  font-size: 1rem;
`;

export const OptionBox = styled.div`
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Option = styled.p`
  margin-left: 10px;
  color: ${colors.white};
  font-weight: bold;
  font-size: 0.9rem;
`;