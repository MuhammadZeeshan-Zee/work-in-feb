import React from 'react'
import ChildB from './ChildB'
function ChildA({value}) {
    const {name,fatherName}=value
  return (
    <div>
      <h1>im A {name}</h1>
      <ChildB {...value}/>
    </div>
  )
}

export default ChildA
