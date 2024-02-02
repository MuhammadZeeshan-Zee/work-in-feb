import React from 'react'
import { useContext } from 'react'
import { Appdata } from './Contexthook';
function Child2() {
    const userData=useContext(Appdata);
  return (
    <div>
      <h1>im child2 {userData.name}</h1>
    </div>
  )
}

export default Child2
