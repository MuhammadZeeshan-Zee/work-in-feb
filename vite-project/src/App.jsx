import { useEffect } from 'react'
import './App.css'
import axios, { isAxiosError } from 'axios'
import { useState } from 'react'

function App() {
  const [mydata,setMydata]=useState([])
  const [isError,setIsError]=useState('')
  // useEffect(
  //   ()=>{
  //     axios.get("https://fakestoreapi.com/user")
  //     .then(res=>{
  //     // console.log(res.data)
  //     return setMydata(res.data)
  //   }).catch((error)=>{
  //     // console.log("error is",error.message)
  //     return setIsError(error)
  //   })
  //   },[]
  // )
  let getapidata=async()=>{
       try {
        let res=await axios.get("https://fakestoreapi.com/users")
       setMydata(res.data)
       } catch (error) {
        setIsError(error)
       }
  }
  useEffect(()=>{
    getapidata()
  },[])
  return (
    <>
    {/* {isError!="" ? <h2>{isError.message}</h2>: <h2>mydata</h2>} */}
    {isError!=="" && <h2>{isError.message}</h2> }
    {mydata.map((post,index)=>{
      const {name,email}=post
      const{firstname,lastname}=name
      {console.log(lastname);}
      return(
         <p key={index}>{firstname+lastname}</p>
       
        )
    })}

    </>
  )
}

export default App
