import React, { useState } from 'react'
import FlipCard from '../../components/FlipCard'
import Coin from '../../content/icons/Coin'
import { 
  FromLeft, 
  Button, 
  ButtonLabel,
  CoinBack
} from './style'

export default function ReleasePayment({ finished }){

  const [buttonClicked, setButtonClicked] = useState(false)

  const handleButtonClick = () => {
    if(buttonClicked === false){
      setButtonClicked(true)
      finished()
    }
  }

  return (
    <FromLeft width="80%">
      <Button onClick={handleButtonClick}>
        <ButtonLabel>{buttonClicked === false ? 'LIBERAR PAGAMENTO' : 'LIBERADO'}</ButtonLabel>
        <FlipCard 
          flip={buttonClicked} 
          back={<CoinBack />} 
          front={<Coin size={40} />}
          width="40px"
          height="40px"
          right="9px"
        />
      </Button>
    </FromLeft>
  )
}