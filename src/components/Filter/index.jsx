import React from 'react'
import { Container,Icons} from './style'
import Button from "../Generics/Button"
import Input from "../Generics/Input"
import {Dropdown} from "antd";
import 'antd/dist/reset.css';
const Filter = () => {
  const menu=(
    <h1>Salom</h1>
  )
  return (
    <Container>
      <Input icon={<Icons.Houses/>} placeholder={"Enter an address, neighborhood, city, or ZIP code"}/>
      <Dropdown
      menu={{
        menu
      }}
      placement="bottomRight"
      arrow={{
        pointAtCenter: true,
      }}
    >
      <Button type={"light"}><Icons.Setting/>Advanced</Button>
    </Dropdown>
      <Button><Icons.Filter/>Search</Button>
    </Container>
  )
}

export default Filter;
