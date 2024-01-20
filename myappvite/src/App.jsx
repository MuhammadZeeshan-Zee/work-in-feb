import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setcounter] = useState(15)
  const add=()=>{
    setcounter(counter+1)
  }
  const remove=()=>{
    if(counter>0)
    setcounter(counter-1)
  }
  return (
    <>
    
    <h1>counter: {counter}</h1>
    <button onClick={add}>addup: {counter} </button>
    <br />
    <button onClick={remove}>remove: {counter}</button>
    </>
  )
}

export default App
