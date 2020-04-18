import styled, { css } from 'styled-components'

export const Question = styled.h3`
  margin: 2vh 0 1vh 0;
  ${({fromLeft}) => fromLeft && css` align-self: flex-start;`}
  ${({fromRight}) => fromRight && css` align-self: flex-end; text-align: right; margin-right: 20%;`}
  color : ${({color}) => color && color};
  font-size: 1rem;
`;

export const Row = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`;

export const FromLeft = styled.div`
  width:100%;
  animation-duration: 0.5s; 
  animation-fill-mode: both; 
  animation-name: fromLeft; 
  animation-iteration-count: 1;

  @keyframes fromLeft {
    from { transform: translateX(-100%);}
    to {transform: translateX(10%);}
  }
`;

export const FromRight = styled.div`
  width:100%;
  animation-duration: 0.5s; 
  animation-fill-mode: both; 
  animation-name: fromRight; 
  animation-iteration-count: 1;

  @keyframes fromRight {
    from { transform: translateX(100%);}
    to {transform: translateX(10%);}
  }
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
  width: 100%;
  background: #f68d4f;
  color: #2d0b01a8;
  margin-top: 20px;
  height: 7vh;
  border: none;
  border-radius: 55px;
  box-shadow: 0px 5px 7px -1px #8b3500a3;
  position: relative;
  cursor: pointer;

  &.selected{
    background: #ac4727;
    color: white;
    box-shadow: none;
  }

  &:hover{
    background: #ac4727;
    color: white;
    box-shadow: none;
  }

  svg {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 8vh;
  }
`;

export const ButtonLabel = styled.p`
  font-family: Anton;
  font-weight: lighter;
  font-size: 1.3rem;
  letter-spacing: 0.5px;
  margin: 0;
`;