import styled, { css } from 'styled-components'
import { colors } from '../../content/theme'

export const Container = styled.div`
  /* width: 300px;
  height: 25px; */
  background: #e5e5e5;
  /* border-radius: 7px;
  border: 2px solid #c8c8c8; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 999;

  width: 240px;
  height: 29px;
  border-top-left-radius: 72px;
  border-bottom-left-radius: 100px;
  border-top-right-radius: 72px;
  border-bottom-right-radius: 100px;
  background: #41d0c4;
`

export const Body = styled.div`
  /* width: 98%; */
  /* height: 89%; */
  background: white;
  /* border-radius: 7px; */
  border: 1px solid #d9d9d9;

  height: 29px;
  width: 93%;
  background: #0a5c56;
  border-top-left-radius: 72px;
  border-bottom-left-radius: 100px;
  border-top-right-radius: 72px;
  border-bottom-right-radius: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    width: 80%;
    position: absolute;
    height: 4px;
    background: #0a5c56;
    z-index: 9;
    top: 15px;
    right: 7px;
  }
`

export const Load = styled.div`
  height: 89%;
  /* width: 98%; */
  /* border-radius: 7px; */
  /* background: rgba(51,195,179,1);
  background: -moz-linear-gradient(-45deg, rgba(51,195,179,1) 0%, rgba(106,245,240,1) 36%, rgba(10,171,166,1) 74%, rgba(10,171,166,1) 100%);
  background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(51,195,179,1)), color-stop(36%, rgba(106,245,240,1)), color-stop(74%, rgba(10,171,166,1)), color-stop(100%, rgba(10,171,166,1)));
  background: -webkit-linear-gradient(-45deg, rgba(51,195,179,1) 0%, rgba(106,245,240,1) 36%, rgba(10,171,166,1) 74%, rgba(10,171,166,1) 100%);
  background: -o-linear-gradient(-45deg, rgba(51,195,179,1) 0%, rgba(106,245,240,1) 36%, rgba(10,171,166,1) 74%, rgba(10,171,166,1) 100%);
  background: -ms-linear-gradient(-45deg, rgba(51,195,179,1) 0%, rgba(106,245,240,1) 36%, rgba(10,171,166,1) 74%, rgba(10,171,166,1) 100%);
  background: linear-gradient(135deg, rgba(51,195,179,1) 0%, rgba(106,245,240,1) 36%, rgba(10,171,166,1) 74%, rgba(10,171,166,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#33c3b3', endColorstr='#0aaba6', GradientType=1 );
     */
  position: absolute;
  animation-duration: 3s;
  animation-name: loading;
  transform-origin: left;
  animation-fill-mode: fowards;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial;
  font-weight: bold;
  color: white;

  @keyframes loading {
    from { transform: scaleX(0); opacity: 0; }
    to { transform: scaleX(1); opacity: 1;}
  }

  width: 71%;
  height: 53%;
  border-radius: 2px;
  right: 19px;
  background: ${colors.green};
`

export const Counter = styled.p`
  width: 100%;
  padding-left: 11px;
  color: white;
  font-weight: bold;
  font-family: Anton;
  letter-spacing: 1px;
`;

export const Text = styled.p`
  animation-duration: 4s;
  animation-name: text;
  animation-fill-mode: fowards;
  color: ${colors.black}b3;
  font-family: 'Walter Turncoat', cursive;
  font-size: 0.8rem;
  letter-spacing: 2px;
  font-weight: bold;

  @keyframes text {
    0% { transform: scale(0); opacity: 0;}
    75% { transform: scale(1); opacity: 0;}
    100% { transform: scale(1); opacity: 1;}
  }
`
