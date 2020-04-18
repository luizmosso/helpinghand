import React, { useState, useEffect } from 'react'
import { Container, Body, Load, Counter, Text } from './style'

export default function Loader({ text }){

  const [percentual, setPercentual] = useState(0)
  const [intervalId, setIntervalId] = useState("")


  useEffect(() => {
    const id = setInterval(() => {
      setPercentual(percentual => percentual + 1)
    }, 30)
    setIntervalId(id)
  }, [])

  useEffect(() => {
    if(percentual === 100)
      clearInterval(intervalId)
  }, [percentual])

  return (
    <Container>
      <Body>
        <Counter>{percentual}</Counter>
      </Body>
      <Load>
        {/* <Text>{text}</Text> */}
      </Load>
    </Container>
  )
}