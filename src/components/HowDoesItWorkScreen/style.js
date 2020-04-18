import styled, { css } from 'styled-components'
import Title from '../../components/Title'
import { colors } from '../../content/theme'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: ${({background}) => background};
`;
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 2vh;
`;

export const HowDoesItWorkTitle = styled(Title)`
  padding-top: 15px;
  position: absolute;
  width: 100%;
  margin: 0;
  ${({isLightBackground}) => isLightBackground && css`color: ${colors.blue};`}
`;