import React from 'react'
import { Card, Front, Back } from './style'

export default function FlipCard({ flip, front, back, width, height, top, right}){
  const commonProps = { width, height }
  return (
    <Card flip={flip} {...commonProps} top={top} right={right} >
      <Back {...commonProps}>{back}</Back>
      <Front {...commonProps}>{front}</Front>
    </Card>
  )
}