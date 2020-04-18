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
  width:100%;
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

export const RatingContainer = styled.div`
  width: ${({ width }) => width !== undefined ? width : '100%'};
  height: 40vh;
  min-height: 280px;
  ${growAnimation('rateGrow', 0)}
`;

export const Title = styled.h2`
  margin: 3vh 0 1vh 0;
  font-size: 1.2rem;
  font-family: Anton;
  font-weight: lighter;
`;

export const RateBox = styled.div`
  margin-top: 1vh;
`;

export const Rate = styled.div`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 40px;
  margin-right: 20px;
  box-shadow: 0px 2px 3px 0px #00000096;

  background: rgba(227,229,230,1);
  background: -moz-linear-gradient(-45deg, rgba(227,229,230,1) 0%, rgba(199,208,214,1) 50%, rgba(181,198,208,1) 51%, rgba(224,239,249,1) 100%);
  background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(227,229,230,1)), color-stop(50%, rgba(199,208,214,1)), color-stop(51%, rgba(181,198,208,1)), color-stop(100%, rgba(224,239,249,1)));
  background: -webkit-linear-gradient(-45deg, rgba(227,229,230,1) 0%, rgba(199,208,214,1) 50%, rgba(181,198,208,1) 51%, rgba(224,239,249,1) 100%);
  background: -o-linear-gradient(-45deg, rgba(227,229,230,1) 0%, rgba(199,208,214,1) 50%, rgba(181,198,208,1) 51%, rgba(224,239,249,1) 100%);
  background: -ms-linear-gradient(-45deg, rgba(227,229,230,1) 0%, rgba(199,208,214,1) 50%, rgba(181,198,208,1) 51%, rgba(224,239,249,1) 100%);
  background: linear-gradient(135deg, rgba(227,229,230,1) 0%, rgba(199,208,214,1) 50%, rgba(181,198,208,1) 51%, rgba(224,239,249,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e3e5e6', endColorstr='#e0eff9', GradientType=1 );
`;

export const Description = styled.p`
  font-family: 'Walter Turncoat',cursive;
  font-size: 1.2rem;
  color: ${colors.darkerGray};
  margin: 1vh;
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
  background: ${colors.blue};
  color: ${colors.darkBlue}cf;
  margin-top: 20px;
  height: 8vh;
  border: none;
  border-radius: 55px;
  position: relative;
  cursor: pointer;

  &.selected{
    background: ${colors.darkBlue};
    color: white;
    box-shadow: none;
  }

  &:hover{
    background: ${colors.darkBlue};
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