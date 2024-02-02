import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

function Memohook() {
    const [myNum,setMyNum]=useState(0)
    const [show,setShow]=useState(false)
    let getValue=()=>{
        setMyNum(myNum+1)
        
    }
    // let Counterdata=()=>{
    //     console.log("line 11 data is displaying ", myNum);
    //     return myNum
    // }
    let Counterdata=useMemo(()=>{
        console.log("line 11 data is displaying ", myNum);
        return myNum
    },[myNum])
    let changetext=()=>{
        console.log("value before",show)
        setShow(!show)
        console.log("value after",show)

    }
  return (
    <div>
      <button onClick={getValue}>Counter</button>
      {/* <p>My new number is {<Counterdata/>}</p> */}
      <p>My new number is {Counterdata}</p>
      
      <button onClick={changetext}>click me</button>
      {/* <button onClick={changetext}>
        {show ? "You clicked me" : "Click me plz"}
      </button> */}
    </div>
  )
}

export default Memohook
