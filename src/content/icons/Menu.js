import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({size}) => css`
    width: ${size}px;
    height: ${size}px;
    z-index: 9;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
  `}
`

const Stripe = styled.div`
  width: ${({width}) => width};
  height: 13%;
  background: black;
  border-radius: 1000px;
  ${({right}) => right && css`align-self : flex-end`};
`

export default function Menu({size, onClick}){
  return (
    <Container size={size} onClick={onClick} >
      <Stripe width="60%" />
      <Stripe width="100%" />
      <Stripe width="60%" right={true} />
    </Container>
  )
}