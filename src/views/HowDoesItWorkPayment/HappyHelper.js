import React, { useEffect } from 'react'
import Hearts from '../../components/Hearts'
import agricultureSVG from '../../content/images/agriculture.svg'
import { 
  AgricultureContainer,
  Agriculture,
  HeartsContainer
} from './style'

export default function HappyHelper({ finished }){

  useEffect(() => { 
    finished()
  }, [])

  return (
    <AgricultureContainer>
      <HeartsContainer>
        <Hearts />
      </HeartsContainer>
      <Agriculture src={agricultureSVG} />
    </AgricultureContainer>
    
  )
}