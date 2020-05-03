import styled from 'styled-components'
import { margin } from 'styled-system'

export const List = styled.div`
    overflow-x: auto;
    display: flex;
    width: 100%;
    flex-wrap: ${({wrapItems}) => wrapItems ? 'wrap' : 'nowrap'};
    align-items: center;
    justify-content: space-between;
    ${margin};
`