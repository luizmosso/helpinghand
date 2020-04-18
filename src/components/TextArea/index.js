import React from 'react'
import { Container, TextAreaBody } from './style'

const TextArea = ({ width, value, onChange, placeholder, ContainerCSS, textAreaCSS, className }) => {

  return (
    <Container width={width} value={value} css={ContainerCSS}>
      <TextAreaBody 
        value={value} 
        placeholder={placeholder} 
        onChange={onChange} 
        css={textAreaCSS}
        className={className}
      />
    </Container>
  )
}

export default TextArea