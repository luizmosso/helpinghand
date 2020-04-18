import styled, { css } from 'styled-components'
import { colors } from '../../content/theme'

export const Container = styled.div`
  width: ${({ width }) => width !== undefined ? width : '100%'};
  position: relative;
  background: ${colors.white};
  border-radius: 7px;
  box-shadow: 0px 2px 2px 1px ${colors.darkGreen}ad;
  border: none;
  height: calc(10vh + 2px);
  ${({css}) => css}

  ${({value}) => 
    value && (value !== "") &&
    css`
      border-bottom: 5px solid ${colors.orange};
      height: calc(10vh + 5px);
    `
  }
`;

export const TextAreaBody = styled.textarea`
  padding-top: 10px;
  height: 10vh;
  padding-left: 20px;
  color: ${colors.orange};
  font-size: 1rem;
  font-weight: bold;
  padding-bottom: 0px;
  outline: none;
  border-radius: 7px;
  border: none;
  width: calc(100% - 20px);
  ${({css}) => css}

  ${({value}) => 
    value && (value !== "") &&
    css`
      height: calc(10vh - 5px);
    `
  }

  &::placeholder{
    color: ${colors.gray};
    font-size: 1rem;
    font-weight: bold;
  }
`;