import { useState } from "react";
import './App.css'
import Chai from "./chai.jsx";
function App() {
  let [counter,setcounter]=useState(0)
  let addup=()=>{
    setcounter(counter+1)
  }
  let remove=()=>{
    setcounter(counter-1)
  }
  return (
    <>
    <h1>counter: {counter}</h1>
    <button onClick={addup}>addup: {counter} </button>
    <button onClick={remove}>remove: {counter}</button>
      <Chai/>
       
    </>
  )
}

export default App
