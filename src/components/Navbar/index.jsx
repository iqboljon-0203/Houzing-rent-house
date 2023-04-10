import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { navbar } from '../../utils/navbar'
import { Container, Logo, Wrapper,Link } from './style'
import { Section } from './style'
import Filter from '../Filter'
import Button from "../Generics/Button"
const Navbar = () => {
  const navigate=useNavigate()
  return (
    <Container>
      <Wrapper>
        <Section onClick={()=>navigate("/home")} logo><Logo/> <h3>Houzing</h3></Section>
        <Section>
          {navbar.map(({title,path,hidden},index)=>{
            return !hidden && (
                <Link className={({isActive})=>isActive && 'active'} key={index} to={path}>
                  {title}
                </Link>
            )
          })}
        </Section>
        <Section>
          <Button onClick={()=>navigate("/signin")} type="dark">Signin</Button>
        </Section>
      </Wrapper>
      <Filter></Filter>
      <Outlet></Outlet>
    </Container>
  )
}

export default Navbar
