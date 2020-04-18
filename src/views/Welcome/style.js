import styled from 'styled-components'
import { colors } from '../../content/theme'
import { growAnimation } from '../../utilities/animationFunctions'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
export const CenterImage = styled.div`
  position: relative;
  display:flex;
  align-items: center;
  justify-content: center;
  animation-duration: 1s; 
  animation-fill-mode: both; 
  animation-name: bounce; 
  animation-iteration-count: infinite;

  img {
    width: 200px;
    height: 200px;
    border-radius: 200px;
    border: 9px solid ${colors.lightBlue};
    background: ${colors.white};
    z-index: 2;
  }

  &::after{
    content: '.';
    color: transparent;
    position: absolute;
    bottom: -15px;
    border-radius: 100%;
    z-index: 1;
    width: 150px;
    height: 30px;
    animation-name: shadowBounce; 
    animation-iteration-count: infinite;
    animation-duration: 1s; 
    animation-fill-mode: both; 
    opacity: 0.5;
  }

  @keyframes bounce {
   0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
   40% {transform: translateY(-30px);} 
   60% {transform: translateY(-15px);} 
  } 

  @keyframes shadowBounce {
   0%, 20%, 50%, 80%, 100% {transform: scale(0); background: #000000e6;} 
   40% {transform: scale(1) translateY(30px); background: #00000057;} 
   60% {transform: scale(0.7) translateY(15px);  } 
  } 
`;

export const Description = styled.p`
  text-align: center;
  width: 80%;
  margin: 0;
  font-size: 1.1rem;
  font-weight: bold;
  color: ${colors.darkBlue};
  ${growAnimation('descGrow', 0)}
`;

export const GroovyArrow = styled.img`
  width: 91px;
  height: 91px;
`;

export const NextButton = styled.button`
  background: ${colors.lightBlue};
  color: ${colors.darkBlue};
  height: 50px;
  width: 80%;
  border-radius: 5px;
  border: none;
  position: relative;
  margin-left: -23px;
  padding-left: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 5vh;
  font-family: Anton;
  font-weight: lighter;
  font-size: 1.3rem;
  letter-spacing: 0.5px;
  ${growAnimation('btnGrow', 0.3)}

  ::before{
    content: '.';
    color: transparent;
    width: 0; 
    height: 0; 
    border-top: 25px solid transparent;
    border-bottom: 25px solid transparent; 
    border-left:25px solid  ${colors.blue}; 
    position: absolute;
    top: 0;
    left: 0;
  }

  ::after{
    content: '.';
    color: transparent;
    width: 0; 
    height: 0; 
    border-top: 25px solid transparent;
    border-bottom: 25px solid transparent; 
    border-left:25px solid  ${colors.lightBlue}; 
    position: absolute;
    top: 0;
    right: -23px;
  }
`;