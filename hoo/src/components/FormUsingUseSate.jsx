import React from 'react'
import { useState } from 'react'

function FormUsingUseSate() {
    const[inpt, setInpt]=useState({
        username:"",
        email:"",
        password:"",
        confirm:""
      })
      let change=(event)=>{
        let name=event.target.name
        let value=event.target.value
        // console.log("NAME",name ,"and its VALUE",value)
        setInpt((prev)=>{
          return({...prev, [name]:value})
        })
      }
  return (
    <div>
      <input 
      type="text"
      placeholder='ENTER USERNAME'
      name='username'
      id='username'
      value={inpt.username}
      onChange={change}
      />
      <br />
      <input 
      type="email"
      placeholder='ENTER EMAIL'
      name='email'
      id='email'
      value={inpt.email}
      onChange={change}
      />
      <br />
      <input 
      type="password"
      placeholder='ENTER LIST DATA'
      name='password'
      id='password'
      value={inpt.password}
      onChange={change}
      />
      <br />
      <input 
      type="password"
      placeholder='ENTER LIST DATA'
      name='confirm'
      id='confirm'
      value={inpt.confirm}
      onChange={change}
      />
      <p>username is {inpt.username} and email is {inpt.email}</p>

    </div>
  )
}

export default FormUsingUseSate
