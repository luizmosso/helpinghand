import React, { useEffect } from 'react'
import LaborMan from '../../components/LaborMan'
import { FromLeft } from './style'
import { delay } from '../../utilities/usefulFunctions'

export default function Worker({ finished }){
  
  useEffect(() => { 
    const Animation = async () => {
      await delay(1500)
      finished()
    }
    Animation() 
  }, [])

  return (
    <FromLeft width="80%" height="22vh" minHeight="150px">
      <LaborMan animationCount={5} />
    </FromLeft>
  )
}