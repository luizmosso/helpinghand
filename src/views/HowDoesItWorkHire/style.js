import styled from 'styled-components'
import { colors } from '../../content/theme'
import { growAnimation } from '../../utilities/animationFunctions'

export const HelperContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 330px;
  align-items: center;
  justify-content: space-between;
  margin: 6vh 0 6vh 0;
  ${growAnimation('helperGrow', 0)}
`;

export const Agriculture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 200px;
  background: white;
  border: 6px solid ${colors.lightOrange};
  margin-right: 10px;
  padding: 8px;
  box-shadow: 0px 3px 9px -3px ${colors.darkOrange};
`;
export const FlexRow = styled.div`
  display: flex;
`;
export const FlexColumn= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Name = styled.h2`
  font-size: 1rem;
  color: ${colors.brown};
  margin: 0;
  margin-bottom: 2px;
  padding-left: 4px;
`;

export const Role = styled.h2`
  font-size: 0.8rem;
  color: ${colors.white};
  margin: 0;
  margin-bottom: 10px;
  padding-left: 4px;
`;

export const GrowBox = styled.div`
  ${({id, delay}) => {
    return growAnimation(`gb_${id}`, delay)
  }}
`;

export const Baloon = styled.div`
  position: relative;
  margin-bottom: 20px;

  animation-duration: 3s; 
  animation-fill-mode: both; 
  animation-name: growBaloon; 
  animation-iteration-count: infinite;
  animation-delay: 1s;
  transform-origin: bottom;

  @keyframes growBaloon {
    0% { transform: scale(0);}
    10% {transform: scale(1.1);}
    15% {transform: scale(1);}
    50% {transform: scale(1);}
    55% {transform: scale(0);}
    100% {transform: scale(0);}
  }
`;
export const BaloonCorner = styled.img`
  position: absolute;
  width: 70px;
`;
export const BaloonContent = styled.p`
  background: ${colors.white};
  height: 52px;
  margin: 0;
  border-radius: 50px;
  margin-left: 2px;
  padding-left: 31px;
  padding-right: 17px;
  display: flex;
  align-items: center;
  color: ${colors.darkerGray};
  font-family: 'Walter Turncoat',cursive;
  font-size: 1.3rem;
  box-shadow: 4px 4px 6px -2px #0000004d;
`;

export const MoneyContainer = styled.div`
  margin: 6vh 0 6vh 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  ${growAnimation('valueGrow', 0)}
`;

export const Label = styled.p`
  color: ${colors.brown};
  font-family: Anton;
  font-weight: lighter;
  font-size: 1.7rem;
  text-align: right;
  margin: 0;
  margin-bottom: -9px;
`

export const Price = styled.p`
  font-weight: bold;
  font-size: 3.1rem;
  font-family: 'Walter Turncoat',cursive;
  margin: 0;
  color: ${colors.white};
  text-shadow: 0px 1px 0px ${colors.brown};
`

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
  background: ${colors.green};
  color: ${colors.darkerGreen}cf;
  margin-top: 20px;
  height: 8vh;
  border: none;
  border-radius: 55px;
  position: relative;
  cursor: pointer;

  &.selected{
    background: ${colors.darkerGreen};
    color: white;
    box-shadow: none;
  }

  &:hover{
    background: ${colors.darkerGreen};
    color: white;
    box-shadow: none;
  }

  svg {
    position: absolute;
    right: -6px;
    bottom: 9px;
    height: 8vh;
    transform: rotateY(180deg);
  }
`;

export const ButtonLabel = styled.p`
  font-family: Anton;
  font-weight: lighter;
  font-size: 1.3rem;
  letter-spacing: 0.5px;
  margin: 0;
`;