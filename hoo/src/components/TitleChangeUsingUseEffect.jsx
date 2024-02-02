import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function TitleChangeUsingUseEffect() {
    const [count, setCount]=useState(0) 
    let addup=()=>{
      setCount(count+1)
    }
    let remove=()=>{
      if(count>0)
      setCount(count-1)
    }   
     useEffect(()=>{
     document.title=`${count}`
     },[count]);
          
  return (
    <div>
      <h1>counter: {count}</h1>
    <button onClick={addup}>addup: {count} </button>
    <button onClick={remove}>remove: {count}</button>
     
    </div>
  )
}

export default TitleChangeUsingUseEffect
