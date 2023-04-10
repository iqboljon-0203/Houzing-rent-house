import React from 'react'
import { Container } from './style'

const Button = ({children,type,onClick}) => {
  return (
    <Container onClick={onClick} type={type} width={120}>
        {children||"Button"}
    </Container>
  )
}

export default Button
