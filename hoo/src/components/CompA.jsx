import React from 'react'
import CompB from './compB'
import { createContext } from 'react'
function CompA() {
  const Bio=createContext();

  return (
        <Biodata.Provider value={"zeeshan"}>
      <CompB />   
    </Biodata.Provider>
  )
}

export default {CompA,Bio};