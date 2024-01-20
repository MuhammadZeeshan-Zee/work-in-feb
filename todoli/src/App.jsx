import { useState } from 'react'
import './App.css'
import Todoin from './components/Todoin'
function App() {
 const [List,setList]=useState([])
 let addlist=(ninpt)=>{
  setList([...List, ninpt])
   }

    let [counter, setcounter] = useState(0)
    const add=()=>{
      setcounter(counter+1)
    }
    
  return (
    <>
    <Todoin addlist={addlist}/>
          <h1>counter: {counter}</h1>
    <button onClick={add}>addup: {counter} </button>
    <br />
    </>
  )
}

export default App
