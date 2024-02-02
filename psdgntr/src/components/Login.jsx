import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import UserContext from './UserContext'

function Login() {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const {setUser}=useContext(UserContext)

    let handleSubmit=(e)=>{
        e.preventDefault()
        setUser({name, password})
        console.log("clickedsubmit");
    }
    let handlename=(e)=>{
        setName(e.target.value)
        console.log(name)
    }
  return (
    <div>
        <input type='text'
        name="username"
        placeholder="Enter name"
        value={name} onChange={handlename} />
        <input type='password'
        name="password"
        placeholder="Enter password" 
        value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
