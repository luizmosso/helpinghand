import React, { useEffect } from 'react'
import { SimulateButtonClick } from '../../utilities/animationFunctions';
import Like from '../../content/icons/Like'
import { 
  FromBottom, 
  Button, 
  ButtonLabel
} from './style'

export default function HireButton({ finished }){

  const buttonClass = 'btnConfirm2'
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
        <ButtonLabel>CONTRATAR</ButtonLabel>
        <Like size={100} />
      </Button>
    </FromBottom>
  )
}