import styled from 'styled-components'
import { colors } from '../../content/theme'

export const Outer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Inner = styled.div`
  width: 100%;
  max-width: 700px;
  height: 100%;
  background: ${colors.blue};
  overflow-x: hidden;
`