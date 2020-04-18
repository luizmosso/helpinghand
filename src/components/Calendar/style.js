import styled, { css } from 'styled-components'

export const Container = styled.div`
  height: ${({ width }) => width !== undefined ? width : '100%'};
`;