import React, { useEffect } from 'react'
import { Button, ButtonLabel, FromBottom } from './style';
import HandsUp from '../../content/icons/HandsUp';
import { SimulateButtonClick } from '../../utilities/animationFunctions';

const AnimatedConfirmButton = ({finished}) => {

  const buttonClass = 'btnConfirm1'
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
        <ButtonLabel>Procurar ajuda</ButtonLabel>
        <HandsUp size={100} />
      </Button>
    </FromBottom>
  )
}

export default AnimatedConfirmButton

