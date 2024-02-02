import React from 'react'
import { useState } from 'react'

function useStatehook() {
        const [count, setCount]=useState(10)
        
        let addup=()=>{
          setCount(count+1)
        }
        let remove=()=>{
          if(count>0)
          setCount(count-1)
        }
  return (
    <div>
    <h1>counter: {count}</h1>
    <button onClick={addup}>addup: {count} </button>
    <button onClick={remove}>remove: {count}</button>
     
    </div>
  )
}

export default useStatehook
