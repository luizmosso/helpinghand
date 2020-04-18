import React, { useEffect } from 'react'
import { SimulateButtonClick } from '../../utilities/animationFunctions';
import RaceFlag from '../../content/icons/RaceFlag'
import { 
  FromBottom, 
  Button, 
  ButtonLabel
} from './style'

export default function FinallyButton({ finished }){

  const buttonClass = 'btnConfirm3'
  const selectedClass = 'selected'
  
  useEffect(() => { 
    const Animation = async () => {
      await SimulateButtonClick(buttonClass, selectedClass, 1000)
      finished()
    }
    Animation() 
  }, [])

  return (
    <FromBottom width="80%">
      <Button className={buttonClass}>
        <ButtonLabel>E FINALMENTE...</ButtonLabel>
        <RaceFlag size={100} />
      </Button>
    </FromBottom>
  )
}