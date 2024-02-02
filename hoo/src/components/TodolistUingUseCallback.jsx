import React, { memo } from 'react'
function TodolistUingUseCallback({todos,addtodo}) {
    console.log("im call on addlist")   
    
  return (
    <div>
      <h1>Todo list</h1>
      <button onClick={addtodo}>+</button>
      <ol>
     
       {
        todos.map((val,ind)=>{
          return <p key={ind}>{val+ind}</p> 

        })
       }
        </ol>
    </div>
  )
}

export default memo(TodolistUingUseCallback)

