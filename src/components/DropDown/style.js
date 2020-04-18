import styled, { css } from 'styled-components'
import { colors } from '../../content/theme'

export const Select = styled.div`
  width: ${({ width }) => width !== undefined ? width : '100%'};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Control = styled.div`
  width: 100%;
  height: 6vh;
  background: ${colors.white};
  border-radius: 7px;
  box-shadow: 0px 2px 2px 1px ${colors.darkGreen + 'ad'};
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  &::after{
    position: absolute;
    content: '';
    right: 20px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid ${colors.darkGreen};
  }

  p{
    height: 90%;
    width: 75%;
    margin-left: 20px;
    display: flex;
    align-items: center;
    color: ${({usePlaceholder}) => !usePlaceholder ? colors.orange : colors.gray};
    font-weight: bold;
  }
`;

export const List = styled.div`
  max-height: 158px;
  width: 100%;
  position: relative;
  animation-name: showList; 
  animation-iteration-count: 1;
  animation-duration: 0.2s; 
  animation-fill-mode: both; 
  transform-origin: top;

  @keyframes showList {
   from { transform: scaleY(0);}
   to { transform: scaleY(1);}
  } 

  &::after{
    position: absolute;
    right: 15px;
    top: 7px;
    content: '';
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom-width: 12px;
    border-bottom-style: solid;
    border-bottom-color: ${({firstItemSelected}) => firstItemSelected ? colors.darkGreen : colors.white};
  }
`;

export const ListContent = styled.div`
  margin-top: 15px;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 158px;
  width: 100%;
  background: ${colors.white};
  border-radius: 5px;
  box-shadow: 0px 1px 2px 1px ${colors.darkGreen + 'd9'};
  display: flex;
  align-items: center;
`;

export const ListItem = styled.p`
  padding-bottom: 15px;
  padding-top: 15px;
  padding-left: 10%;
  margin: 0;
  border-bottom: 2px solid ${colors.lightBorder};
  width: 100%;
  font-weight: bold;
  color: ${colors.darkGreen};
  cursor: pointer;

  &:hover{
    background: ${colors.darkGreen};
    color: white;
  }

  ${({selected}) => 
    selected && css`
      background: ${colors.darkGreen};
      color: white;
    `
  }
`;