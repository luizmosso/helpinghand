import styled, { css } from 'styled-components'
import { colors } from '../../../content/theme'
import { growAnimation } from '../../../utilities/animationFunctions'

export const Container = styled.div`
  height: 92%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
` 

export const LiContainer = styled.div`
  width: 80px;
  margin: 0 10px 15px 10px;
  box-sizing: border-box;
` 

export const LiImage = styled.img`
  width: 80px;
  background: ${colors.lightGray};
  border-radius: 10px;
  ${({ selected }) => selected && css`background: ${colors.green};` };
`

export const LiLabel = styled.p`
  margin: 0;
  font-size: 0.8rem;
  width: 100%;
  text-align: center;
  font-weight: bold;
  color: ${colors.darkGray};
  ${({ selected }) => selected && css`color: ${colors.green};` };
`

export const List = styled.div`

` 

export const Label = styled.p`
  margin: 15px 0 0 0;
  font-weight: bold;
  color: ${colors.darkGray};
  font-family: 'Walter Turncoat',cursive;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  ${growAnimation('cat')}
`

export const Title = styled.h3`
  color: ${colors.darkGreen};
`

export const Description = styled.p`
  text-align: center;
  font-size: 2vh;
  margin-top: 0;
  color: ${colors.darkGray};
`

export const SearchButton = styled.button`
    background: ${colors.green};
    border: none;
    color: ${colors.darkerGreen};
    width: 80%;
    height: 6vh;
    font-weight: bold;
    border-radius: 4px;
`