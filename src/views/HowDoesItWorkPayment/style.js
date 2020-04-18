import styled from 'styled-components'
import { colors } from '../../content/theme'
import { growAnimation, growMoreAnimation } from '../../utilities/animationFunctions'

export const FromLeft = styled.div`
  width: ${({ width }) => width !== undefined ? width : '100%'};
  height: ${({ height }) => height !== undefined ? height : '100%'};
  min-height: ${({ minHeight }) => minHeight !== undefined ? minHeight : 'none'};
  animation-duration: 0.5s; 
  animation-fill-mode: both; 
  animation-name: fromLeft; 
  animation-iteration-count: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes fromLeft {
    from { transform: translateX(-100%);}
    to {transform: translateX(0%);}
  }
`;

export const FromRight = styled.div`
  width: ${({ width }) => width !== undefined ? width : '100%'};
  animation-duration: 0.5s; 
  animation-fill-mode: both; 
  animation-name: fromRight; 
  animation-iteration-count: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @keyframes fromRight {
    from { transform: translateX(100%);}
    to {transform: translateX(0%);}
  }
`;

export const GrowBox = styled.div`
  ${({id, delay}) => {
    return growMoreAnimation(`gb_${id}`, delay)
  }}
`;

export const FromBottom = styled.div`
  width: ${({ width }) => width !== undefined ? width : '100%'};
  animation-duration: 0.5s; 
  animation-fill-mode: both; 
  animation-name: fromBottom; 
  animation-iteration-count: 1;

  @keyframes fromBottom {
    from { transform: translateY(100%);}
    to {transform: translateY(0);}
  }
`;

export const Button = styled.button`
  margin: 4vh 0 5vh 0;
  max-height: 60px;
  width: 100%;
  background: ${colors.orange};
  color: ${colors.darkOrange}cf;
  margin-top: 20px;
  height: 8vh;
  border: none;
  border-radius: 55px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &.selected{
    background: ${colors.darkOrange};
    color: white;
    box-shadow: none;

    .svgBack{
      transform: rotateY(180deg);
    }
  }

  &:hover{
    background: ${colors.darkOrange};
    color: white;
    box-shadow: none;
  }
`;

export const ButtonLabel = styled.p`
  font-family: Anton;
  font-weight: lighter;
  font-size: 1.3rem;
  letter-spacing: 0.5px;
  margin: 0;
`;

export const CoinBack = styled.div`
  width: 40px;
  height: 40px;
  background: ${colors.orange};
  border-radius: 100px;
`

export const AgricultureContainer = styled.div`
  position: relative;
`;

export const Agriculture = styled.img`
  margin-top: 30px;
  width: 150px;
  height: 150px;
  border-radius: 200px;
  background: white;
  border: 6px solid ${colors.lightBlue};
  margin-right: 10px;
  padding: 8px;
  box-shadow: 0px 3px 9px -3px ${colors.darkBlue};
  ${growAnimation('helperGrow', 0)}
`;

export const HeartsContainer = styled.div`
  position: absolute;
  z-index: 9;
  right: -15px;
`;

export const Explain = styled.h3`
    text-align: center;
    color: ${colors.darkBlue};
    font-family: Anton;
    font-weight: lighter;
    letter-spacing: 0.3px;
    font-size: 1rem;
`;

export const LetsGoButton = styled.button`
  margin: 4vh 0 5vh 0;
  max-height: 60px;
  width: 100%;
  background: ${colors.darkBlue};
  color: ${colors.white}d6;
  margin-top: 20px;
  height: 8vh;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Anton;
  font-size: 1.5rem;
  letter-spacing: 0.5px;

  &.selected{
    background: ${colors.white};
    color: ${colors.blue};
  }

  &:hover{
    background: ${colors.white};
    color: ${colors.blue};
  }
`;