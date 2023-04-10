import React from 'react'
import { Container } from './style'

const Input = ({type,onChange,placeholder,name,value,defaultValue,width,height}) => {
  return (
    <Container name={name} value={value} defaultValue={defaultValue} onChange={onChange} placeholder={placeholder} height={height}  type={type} width={width}/>
  )
}

export default Input
