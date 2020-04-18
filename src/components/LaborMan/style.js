import styled, { css } from 'styled-components'
import { colors } from '../../content/theme'

export const Man = styled.div`
  transform: scale(0.8);
  padding-left: 56px;
  position: relative;
  border-bottom: 3px dotted ${colors.orange};
  width: 160px;
  overflow: hidden;
  margin: 0;
`
const bodyParts = css`
  background: ${colors.orange};
  border-radius: 500px;
`

export const Head = styled.div`
  width: 35px;
  height: 35px;
  margin-left: 30px;
  margin-bottom: -10px;

  ${bodyParts}
`

export const Body = styled.div`
  width: 25px;
  height: 80px;
  transform: rotate(30deg);

  ${bodyParts}
`

export const Leg = styled.div``

export const RightLegTie = styled.div`
  width: 15px;
  height: 80px;
  transform: rotate(-60deg);
  margin-top: -40px;
  margin-left: 20px;

  ${bodyParts}
`

export const RightLegShin = styled.div`
  width: 15px;
  height: 60px;
  transform: rotate(15deg);
  margin-top: -30px;
  margin-left: 42px;

  ${bodyParts}
`

export const LeftLegTie = styled.div`
  width: 15px;
  height: 92px;
  transform: rotate(30deg);
  margin-top: -90px;
  margin-left: -35px;

  ${bodyParts}
`

export const Arms = styled.div``

const arm = css`
  position: absolute;
  top: 18px;
`

export const RightArm = styled.div`
  transform-origin: top right;
  transform: rotate(90deg);
  margin-top: 25px;
  margin-left: -10px;
  animation-name: rarmUp;
  animation-duration: 1s;
  animation-iteration-count: ${({animationCount}) => animationCount ? animationCount : 'infinite'} ;
  ${arm}

  @keyframes rarmUp {
    0% {transform: rotate(90deg);}
    50% {transform: rotate(130deg);}
    100% {transform: rotate(90deg);}
  }
`

export const RightArmByceps = styled.div`
  width: 10px;
  height: 50px;
  margin-left: 30px;
  ${bodyParts}
`

export const RightArmForearm = styled.div`
  width: 10px;
  height: 50px;
  margin-left: 33px;
  margin-top: 3px;
  position: relative;
  transform: rotate(-100deg);
  transform-origin: top left;
  animation-name: rarmDown;
  animation-duration: 1s;
  animation-iteration-count: ${({animationCount}) => animationCount ? animationCount : 'infinite'};
  ${bodyParts}

  @keyframes rarmDown {
    0% {transform: rotate(-100deg);}
    50% {transform: rotate(-115deg);}
    100% {transform: rotate(-100deg);}
  }
`

export const LeftArm = styled.div`
  transform-origin: top right;
  transform: rotate(0deg);
  margin-top: 20px;
  animation-name: larmUp;
  animation-duration: 1s;
  animation-iteration-count: ${({animationCount}) => animationCount ? animationCount : 'infinite'};
  ${arm}

  @keyframes larmUp {
    0% {transform: rotate(0deg);}
    50% {transform: rotate(15deg);}
    100% {transform: rotate(0deg);}
  }
`

export const LeftArmByceps = styled.div`
  width: 10px;
  height: 50px;
  margin-left: 30px;
  ${bodyParts}
`

export const LeftArmForearm = styled.div`
  width: 10px;
  height: 50px;
  margin-left: 30px;
  margin-top: -3px;
  position: relative;
  transform: rotate(-40deg);
  transform-origin: top left;
  ${bodyParts}
`

export const Stick = styled.div`
  width: 200px;
  height: 3px;
  position: absolute;
  bottom: 20px;
  left: -20px;
  transform: rotate(40deg);
  transform-origin: top left;  
  ${bodyParts}

  &::before{
    content : '';
    width: 10px;
    height: 25px;
    background: ${colors.orange};
    position: absolute;
    right: -5px;
    transform: skew(8deg, 8deg);
  }
`