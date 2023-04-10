import Input from "../Generics/Input/index"
import React from 'react'
import { Container } from './style'

const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Input placeholder={"test"} width={200}></Input>
    </Container>
  )
}

export default Home
