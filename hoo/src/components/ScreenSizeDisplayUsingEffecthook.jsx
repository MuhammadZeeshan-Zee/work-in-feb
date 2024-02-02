import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
function ScreenSizeDisplayUsingEffecthook() {
    const [widthCount,setWidthCount]=useState(window.screen.width)
    let CurrentWidthCount=()=>{
      setWidthCount(()=>window.innerWidth)
    }
          useEffect(()=>{
      window.addEventListener('resize',CurrentWidthCount)
    })
  
  return (
    <div>
      <h1>screen size is {widthCount}</h1>

    </div>
  )
}

export default ScreenSizeDisplayUsingEffecthook
