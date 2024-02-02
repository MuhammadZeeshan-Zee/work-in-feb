import React from 'react'
import ChildA from './ChildA'

function PropdrillingAndClone() {
    let userData={
        name:"zeeshan",
        fatherName:"Arif"
      }
    
  return (
    <div>
      <h1>hi im app</h1>
    <ChildA value={userData}/>
    </div>
  )
}

export default PropdrillingAndClone
