import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
function UseRefhook() {
//     const [count, setCount]=useState(1)
        
//   useEffect(()=>{
//     setCount(count+1)
//   })

    const [userInput, setUserInput]=useState('')

    const count=useRef(0)
    console.log(count);
    useEffect(()=>{
            count.current=count.current+1
          })
  return (
    <div>
          {/* <h1>counter: {count}</h1>*/}

     <input 
     type="text"
     value={userInput}
     onChange={(e)=>{setUserInput(e.target.value)}} />
         <h1>counter: {count.current}</h1>


    </div>
  )
}

export default UseRefhook
