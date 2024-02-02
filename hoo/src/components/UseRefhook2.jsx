import React, { useRef } from 'react'

function UseRefhook2() {
    let inputRef=useRef()
  let changebackground=()=>{
    inputRef.current.focus();
    inputRef.current.style.backgroundColor='#56879A'
  }
  return (
    <div>
      <input 
    type="text" 
    ref={inputRef}
    />
    <button onClick={changebackground}>submit</button>
    </div>
  )
}

export default UseRefhook2
