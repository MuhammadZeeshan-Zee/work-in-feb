import { useState } from "react";
import Chai from "./chai.jsx";
function App() {
  let [counter,setcounter]=useState(15)

  return (
    <>
    <h1>counter: {counter}</h1>
    <button>addup: {counter} </button>
    <button>remove: {counter}</button>
      <Chai/>
       
    </>
  )
}

export default App
