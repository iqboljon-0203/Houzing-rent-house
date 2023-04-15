import React from 'react'
import { Container,Wrapper,Icon } from './style'

const Input = ({type,onChange,placeholder,name,value,defaultValue,width,height,icon,prefix}) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Container prefix={prefix} icon={icon} name={name} value={value} defaultValue={defaultValue} onChange={onChange} placeholder={placeholder} height={height}  type={type} width={width}/>
    </Wrapper>
    
  )
}

export default Input
