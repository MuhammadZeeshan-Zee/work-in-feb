import React from 'react'

function ChildB(value) {
    const {name,fatherName}=value
  return (
    <div>
      <h1>im B {name}</h1>
    </div>
  )
}

export default ChildB
