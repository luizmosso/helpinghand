import styled from 'styled-components'
import { colors } from '../../content/theme'

export const Container = styled.div`
  position: relative;
  width: 100%;
`

export const Controls = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 10;
  position: absolute;
  bottom: 0;
`;

export const CarouselBullets = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const CarouselBullet = styled.div`
  height: 12px;
  width: 12px;
  margin: 0 4px;
  border: 1px solid ${props => props.color ? props.color : colors.white};
  cursor: pointer;
  border-radius: 30px;
  background: ${props => 
    (
      props.selected ? 
        props.color ? props.color : colors.white 
      : 'transparent'
    )
  };
`;