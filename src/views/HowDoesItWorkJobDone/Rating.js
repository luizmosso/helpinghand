import React, { useEffect, useState } from 'react'
import { css } from 'styled-components'
import { fillInput } from '../../utilities/animationFunctions'
import TextArea from '../../components/TextArea'
import CheckIcon from '../../content/icons/CheckIcon'
import { RatingContainer, Title, RateBox, Rate, Checkbox, Description, GrowBox } from './style'

const Rating = ({ finished }) =>{

  const [obsInputText, setObsInputText] = useState("")
  
  const inputClass = 'obs_1'
  useEffect(() => { 
    const Animation = async () => {
      await fillInput(
        `.${inputClass}`, 
        "Foi ótimo! Sem reclamações.", 
        1000, 
        setObsInputText
      )
      finished()
    }
    Animation()
   }, [])


  const checkIconStyle = {
    position: 'absolute',
    top: -7,
    left: 3,
  }

  return (
    <RatingContainer width="80%">
      <Title>Como foi?</Title>
      <RateBox>
        <Rate>
          <Checkbox>
            <GrowBox id={0} delay={0.3}><CheckIcon size={40} style={checkIconStyle} /></GrowBox>
          </Checkbox>
          <Description>Pontualidade</Description>
        </Rate>
        <Rate>
          <Checkbox>
            <GrowBox id={1} delay={0.9}><CheckIcon size={40} style={checkIconStyle} /></GrowBox>
          </Checkbox>
          <Description>Serviço bem feito</Description>
        </Rate>
        <Rate>
          <Checkbox>
            <GrowBox id={2} delay={1.2}><CheckIcon size={40} style={checkIconStyle} /></GrowBox>
          </Checkbox>
          <Description>Cordialidade</Description>
        </Rate>
      </RateBox>
      <TextArea 
        className={inputClass}
        placeholder="Observações" 
        value={obsInputText} 
        ContainerCSS={
          css`
            border-top: 1px solid #63b6a5;
            border-left: 1px solid #63b6a5;
            height: 100%;
            margin-top: 4vh;
          `
        }
        textAreaCSS={ css`width: calc(100% - 30px);` }
        onChange={(e) => setObsInputText(e.target.value)} 
      />
    </RatingContainer>
  )
}

export default Rating;