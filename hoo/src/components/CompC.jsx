import React from 'react'
import { useContext } from 'react'
import { Bio } from '../App'
function CompC() {
    let name=useContext(Bio)
  return (
    <div>
      <h1>im C {name}</h1>
    </div>
  )
}   

export default CompC
