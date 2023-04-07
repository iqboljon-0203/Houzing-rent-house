import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<h1>Home</h1>}>
            Home
        </Route>
        <Route path='/properties' element={<h1>Properties</h1>}>
            Properties
        </Route>
        <Route path='*' element={<h1>404 not found</h1>}/>
        <Route path='/' element={<Navigate to={'/home'}></Navigate>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Root
