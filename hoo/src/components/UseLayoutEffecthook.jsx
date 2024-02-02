import React from 'react'
import { useEffect, useLayoutEffect } from 'react'

function UseLayoutEffecthook() {
    useEffect(()=>{
        console.log("im useEffect1");
    },[])
    useLayoutEffect(()=>{
        console.log("im useEffect2");
    },[])
    useEffect(()=>{
        console.log("im useEffect3");
    },[])
  return (
    <div>
      
    </div>
  )
}

export default UseLayoutEffecthook
