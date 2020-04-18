import React from 'react'
import { useHistory } from 'react-router-dom'
import { 
  LetsGoButton,
  FromBottom
} from './style'

export default function LetsGo(){
  const history = useHistory()

  return (
    <FromBottom width="80%">
      <LetsGoButton onClick={() => history.push('/')}>
        SEJA BEM VINDO
      </LetsGoButton>
    </FromBottom>
  )
}