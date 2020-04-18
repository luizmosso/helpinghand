import styled from 'styled-components'
import { colors } from '../../content/theme'

export const Container = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  transform: rotate(20deg);
`;

const BaseHeart = styled.div`
  position: absolute;
  animation-duration: 2s;
  animation-iteration-count: infinite;

  &::before{
    content: '\\2665';
  }
`;

export const Heart1 = styled(BaseHeart)`
  animation-name: h1;

  @keyframes h1 {
    0% { font-size: 1px; opacity: 0; bottom: 0}
    50% { font-size: 2rem; opacity: 1; color: ${colors.pink};}
    100% { font-size: 2.3rem; opacity: 1; bottom: 80%; color: ${colors.lightPink};}
  }
`
export const Heart2 = styled(BaseHeart)`
  margin-left: 30px; 
  animation-name: h2; 
  animation-delay: 0.8s;

  @keyframes h2 {
    0% { font-size: 1px; opacity: 0; bottom: 0}
    50% { font-size: 2rem; opacity: 1; color: ${colors.pink};}
    100% { font-size: 2.3rem; opacity: 1; bottom: 80%; color: ${colors.lightPink};}
  }
`
export const Heart3 = styled(BaseHeart)`
  margin-left: 60px; 
  animation-name: h3; 
  animation-delay: 0.4s;

  @keyframes h3 {
    0% { font-size: 1px; opacity: 0; bottom: 0}
    50% { font-size: 2rem; opacity: 1; color: ${colors.pink};}
    100% { font-size: 2.3rem; opacity: 1; bottom: 80%; color: ${colors.lightPink};}
  }
`