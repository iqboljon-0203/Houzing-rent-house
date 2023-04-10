import React, { createContext, useReducer } from 'react'
import { reducer } from './reducer';
const PropertiesContext=createContext();

const PropertiesProvider = ({children}) => {
    const [state,dispatch]=useReducer(reducer,[])
  return (
    <PropertiesContext.Provider value={"ali"}>
      {children}
    </PropertiesContext.Provider>
  )
}

export default PropertiesProvider
