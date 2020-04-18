import React, { useState, useEffect } from 'react'
import { Question, FromLeft } from './style';
import TextArea from '../../components/TextArea';
import { colors } from '../../content/theme';
import { fillInput } from '../../utilities/animationFunctions';

const AnimatedComments = ({finished}) => {

  const inputClass = 'obsInput'
  const [obsInputText, setObsInputText] = useState("")

  useEffect(() => { 
    const Animation = async () => {
      await fillInput(`.${inputClass}`, "Limpar o terreno e podar as plantas.", 0, setObsInputText)
      finished()
    }
    Animation()
   }, [])

  return (
    <FromLeft>
      <Question fromLeft color={colors.darkerGreen} >Comentário?</Question>
      <TextArea 
        className={inputClass}
        placeholder="bla bla bla..." 
        width="80%" 
        value={obsInputText} 
        onChange={(e) => setObsInputText(e.target.value)} 
      />
    </FromLeft>
  )
}

export default AnimatedComments

