import styled, { css } from 'styled-components'
import { colors } from '../../content/theme'

export const Container = styled.div`
  width: ${({ width }) => width !== undefined ? width : '100%'};
  position: relative;
  background: ${colors.white};
  border-radius: 7px;
  box-shadow: 0px 2px 2px 1px ${colors.darkGreen}ad;
  border: none;
  height: 6vh;

  ${({value}) => 
    value && (value !== "") &&
    css`
      border-bottom: 5px solid ${colors.orange};
      height: calc(6vh - 3px);
    `
  }
`;

export const InputBody = styled.input`
  height: calc(6vh - 1px);
  padding-left: 20px;
  color: ${colors.orange};
  font-size: 1rem;
  font-weight: bold;
  padding-bottom: 0px;
  outline: none;
  border-radius: 7px;
  border: none;

  ${({ hasIcon }) => 
    hasIcon ? 
    css`
      width: calc(100% - 60px);
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    ` : 
    css`
      width: calc(100% - 20px);
    `
  }

  ${({value}) => 
    value && (value !== "") &&
    css`
      height: calc(6vh - 5px);
    `
  }

  &::placeholder{
    color: ${colors.gray};
    font-size: 1rem;
    font-weight: bold;
  }
`;