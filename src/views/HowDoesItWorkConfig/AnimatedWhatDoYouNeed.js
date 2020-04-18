import React, { useEffect } from 'react'
import { Question, FromLeft } from './style';
import DropDown from '../../components/DropDown';
import { colors } from '../../content/theme';
import { clickDropDown } from '../../utilities/animationFunctions'
import { delay } from '../../utilities/usefulFunctions'

const AnimatedWhatDoYouNeed = ({ finished }) => {

  const ddlClass = 'dd1Control'
  const ddlOptionClass = 'dd1ControlOpt'

  useEffect(() => { 
    const Animation = async () => {
      await clickDropDown(`.${ddlClass}`, `.${ddlOptionClass}`, 2, 1000)
      await delay(500)
      finished()
    }
    Animation() 
  }, [])

  const services = [
    { label : 'Pintura', value : 0 },
    { label : 'Alvenaria', value : 1 },
    { label : 'Jardinagem', value : 2 },
    { label : 'Elétrica', value : 3 }
  ]

  return (
    <FromLeft>
      <Question fromLeft color={colors.darkerGreen} >Diz ai! De que você precisa?</Question>
      <DropDown controlClass={ddlClass} optionClass={ddlOptionClass} placeholder='Serviços' items={services} width='80%' />
    </FromLeft>
  )
}

export default AnimatedWhatDoYouNeed

