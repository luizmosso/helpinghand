import React from 'react'
import { 
    Man, Head, Body, Leg, 
    RightLegTie, RightLegShin, LeftLegTie, Arms, 
    RightArm, LeftArm, RightArmByceps, RightArmForearm,
    LeftArmByceps, LeftArmForearm, Stick 
} from './style'

export default function LaborMan({ animationCount }){
  return (
    <Man>
      <Head />
      <Body />
      <Leg>
        <RightLegTie />
        <RightLegShin />
      </Leg>
      <Leg>
        <LeftLegTie />
      </Leg>
      <Arms>
        <RightArm animationCount={animationCount}>
          <RightArmByceps />
          <RightArmForearm animationCount={animationCount}>
            <Stick />
          </RightArmForearm>
        </RightArm>
        <LeftArm animationCount={animationCount}>
          <LeftArmByceps />
          <LeftArmForearm />
        </LeftArm>
      </Arms>
    </Man>
  )
}