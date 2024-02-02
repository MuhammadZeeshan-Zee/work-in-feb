import React from 'react'
import { createContext } from 'react'
import Child1 from './Child1'
const Appdata=createContext()
    
function AppProvider({children}) {
    let userData={
      name:"zeeshan",
      fatherName:"Arif"
    }
  return (
    <div>
      <Appdata.Provider value={userData}>
      {children}
    </Appdata.Provider>
    </div>
  )
}

export  {AppProvider,Appdata}
