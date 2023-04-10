import React from 'react'
import { Container } from './style'
import Button from "../Generics/Button"
import Input from "../Generics/Input"

const Filter = () => {
  return (
    <Container>
      <Input/>
      <Button type={"light"}>Advanced</Button>
      <Button>Search</Button>
    </Container>
  )
}

export default Filter;
