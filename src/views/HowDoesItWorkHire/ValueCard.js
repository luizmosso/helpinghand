import React, { useEffect } from 'react'
import { delay } from '../../utilities/usefulFunctions'
import { 
    MoneyContainer, 
    Label, 
    Price
} from './style'

export default function ValueCard({ finished }){

  useEffect(() => { 
    const Animation = async () => {
      await delay(1000); 
      finished() 
    }
    Animation()
  }, [])

  return (
    <MoneyContainer>
      <Label>Valor Calculado</Label>
      <Price>$50,00</Price>
    </MoneyContainer>
  )
}