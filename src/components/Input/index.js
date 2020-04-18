import React from 'react'
import { Container, InputBody } from './style'

const Input = ({ children, width, value, onChange, onClick, placeholder, className }) => {

  const Icon = React.Children.map(children, child =>
    React.cloneElement(child, { 
      style: { 
        position: 'absolute',
        bottom: 0,
        right: 0,
        transform: 'translate(-50%, -1.25vh)'
      } 
    })
  );

  return (
    <Container width={width} value={value}>
      { children && Icon }
      <InputBody 
        className={className}
        value={value} 
        placeholder={placeholder} 
        onChange={onChange} 
        hasIcon={children} 
        onClick={onClick} 
      />
    </Container>
  )
}

export default Input