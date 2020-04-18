import React, { useState, useEffect } from 'react'
import { Question, FromLeft } from './style';
import MapMarker from '../../content/icons/MapMarker';
import Input from '../../components/Input';
import { colors } from '../../content/theme';
import { fillInput } from '../../utilities/animationFunctions';
import { delay } from '../../utilities/usefulFunctions'

const AnimatedWhere = ({finished}) => {

  const inputClass = 'addressInput'
  const [adressInputText, setAdressInputText] = useState("")

  const Animation = async () => {
    await fillInput(`.${inputClass}`, "Rua das Margaridas, 50 - Centro", 0, setAdressInputText)
    await delay(500)
    finished()
  }

  useEffect(() => { Animation() }, [])

  return (
    <FromLeft>
      <Question fromLeft color={colors.darkerGreen} >Aonde?</Question>
      <Input 
        className={inputClass}
        type="text" 
        placeholder="Endereço" 
        width="80%" 
        value={adressInputText} 
        onChange={(e) => setAdressInputText(e.target.value)} 
      >
        <MapMarker color={colors.darkGreen} />
      </Input>
    </FromLeft>
  )
}

export default AnimatedWhere

