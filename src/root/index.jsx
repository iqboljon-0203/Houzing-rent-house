import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { navbar } from '../utils/navbar'
import Navbar from "../components/Navbar/index"
const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar/>}>
            {navbar.map(({path,element,id})=>{
                return <Route key={id} path={path} element={element}/>
            })}
        </Route>
        <Route path='*' element={<h1>404 not found</h1>}/>
        <Route path='/' element={<Navigate to={'/home'}></Navigate>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Root
