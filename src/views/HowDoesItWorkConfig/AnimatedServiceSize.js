import React, { useState, useEffect } from 'react'
import { Question, Row, FromRight } from './style';
import Input from '../../components/Input';
import DropDown from '../../components/DropDown';
import { colors } from '../../content/theme';
import { fillInput, clickDropDown } from '../../utilities/animationFunctions';
import { delay } from '../../utilities/usefulFunctions'

const AnimatedServiceSize = ({finished}) => {

  const inputClass = 'sizeInput'
  const ddlClass = 'dd2Control'
  const ddlOptionClass = 'dd2ControlOpt'
  const [sizeInputText, setSizeInputText] = useState("")

  useEffect(() => { 
    const Animation = async () => {
      await fillInput(`.${inputClass}`, "250,00", 0, setSizeInputText)
      await clickDropDown(`.${ddlClass}`, `.${ddlOptionClass}`, 0, 500)
      await delay(500)
      finished()
    }
    Animation() 
  }, [])

  const unities = [
    { label : 'm2', value : 0 },
    { label : 'lt', value : 1 },
    { label : 'h', value : 2 },
  ]

  return (
    <FromRight>
      <Question fromRight color={colors.darkerGreen} >Tamanho do serviço?</Question>
      <Row>
        <Input 
          className={inputClass}
          type="number" 
          placeholder="Tamanho" 
          width="50%" 
          value={sizeInputText} 
          onChange={(e) => setSizeInputText(e.target.value)} 
        />
        <DropDown controlClass={ddlClass} optionClass={ddlOptionClass} placeholder='...' items={unities} width='35%' />
    </Row>
    </FromRight>
  )
}

export default AnimatedServiceSize

