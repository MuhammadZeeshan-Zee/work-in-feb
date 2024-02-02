import React from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

import TodolistUingUseCallback from './TodolistUingUseCallback'
function UseCallbcakHook() {
    const [todos,setTodos]=useState([])
    let [counter, setcounter] = useState(0)
 
    const add=()=>{
      console.log("add")
      setcounter(counter+1)
    }
    const addtodo=  useCallback(()=>{
      console.log("addTd")

       return setTodos((prev)=>[...prev, 'new entry']);
    },[todos]);
        
         
        useEffect((
          
        )=>{},[]) 
       
  return (
    <div>
        
      <TodolistUingUseCallback todos={todos} addtodo={addtodo}/>
      <hr />
      <h1> counter</h1>
    counter: {counter}
    <br />
    <button onClick={add}>addup: {counter} </button>
    <br />
    </div>
  )
}

export default UseCallbcakHook
