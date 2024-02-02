import React from 'react'
import { useReducer } from 'react'
import reducer from './reducer';

function ConterUsingReducerhook() {
    let initial_val=0;
 const [count, dispatch]=useReducer(reducer, initial_val)

  return (
    <div>
      <h1>hi</h1>
     <h1>counter: {count}</h1>
    <button onClick={()=>dispatch({type:"INC"})}>addup: {count} </button>
    <button onClick={()=>dispatch({type:"DEC"})}>remove: {count}</button>
     
    </div>
  )
}

export default ConterUsingReducerhook
